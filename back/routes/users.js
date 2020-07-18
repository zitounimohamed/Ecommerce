const express = require('express') ;
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require ('../passport');

const {validateBody , schemas} = require('../helpers/routeHelper');
const UsersController = require('../controllers/users');
const passportjwt = passport.authenticate('jwt',{session: false });
const passportlogin = passport.authenticate('local',{session: false });
const gOAuth = passport.authenticate('googleToken', { session: false });
const  User   = require("../models/user");
const Token = require("../models/token");
const crypto = require('crypto');
const creds = require("../configuration");
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

const transporter = nodemailer.createTransport(transport)



router.route('/signup')
    .post(UsersController.signUp);
router.route('/signupM')
    .post(UsersController.signUpM)

router.route('/signin')
    .post(passportlogin,UsersController.signIn);

router.route('/oauth/google')
    .post(gOAuth,UsersController.googleOAuth);

router.route('/oauth/facebook')
.post(passport.authenticate('facebookToken', { session: false }), UsersController.facebookOAuth);

router.route('/all')
    .get(UsersController.all)    
router.route('/count')
    .get(UsersController.count)
router.route('/countm')
    .get(UsersController.countM)
router.route('/signout')
    .get(passportjwt, UsersController.signOut);

router.route('/admin')
    .post(UsersController.register);
router.route('/reset')
    .post (UsersController.reset);
router.route('/updatePassword')
    .post(UsersController.updatePassword);

router.route('/:MagId')
    .delete(UsersController.one);

router.route('/newTrans')
    .post(UsersController.SignupT);
router.route('/alltrans')
    .get(UsersController.allTrans);
router.route('/onetrans/:id')
    .get(UsersController.oneTrans);
router.route('/trans/:id')
    .delete(UsersController.delTrans);
router.route('/profileA/:id')
    .get(UsersController.profileA);
router.route('/profileT/:id')
    .get(UsersController.profileT);  

//forgot password (before login)
router.post("/forgot", (req, res) => {
  const { error } = validateEmail(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  User.findOne({
    "local.email": req.body.email
  }, function (err, user) {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!user)
      return res.status(400).send({ message: "This email is not valid." });

    // Create a verification token
    const token = new Token({
      _userId: user._id,
      token: crypto.randomBytes(16).toString("hex"),
    });

    user.passwordResetToken = token.token;
    // user.passwordResetExpires = moment().add(12, "hours");

    const preservedUser = user;

    user.save(function (err) {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      // Save the token
      token.save(function (err) {
        if (err) {
          return res.status(500).send(err.message);
        }
        // Send the mail
        const mail = {
          to: preservedUser.local.email,
          from: `istabrak.jrad@gmail.com`,
          subject: "Reset password link",
          text: "Some useless text",
          html: `<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n Please click on the following link, or paste this into your browser to complete the process:\n\n
          <a href="http://localhost:3000/signin/reset/${token.token}">https://localhost:3000/login/reset/${token.token}</a> \n\n If you did not request this, please ignore this email and your password will remain unchanged.\n </p>`,
        };
        transporter
          .sendMail(mail)
          .then(() => {
            return res
              .status(200)
              .send({ message: "A verification mail has been sent." });
          })
          .catch((error) => {
            console.log(error);
            return res.status(500).send({ message: error });
          });
      });
    });
  });
});


router.get('/reset', (req, res, next) => {
  console.log(req.query.resetPasswordToken);
  User.findOne({
    passwordResetToken: req.query.resetPasswordToken
  }).then(user => {
    if (user == null) {
      console.log("password reset link is invalid or has expired");
      res.json("password reset link is invalid or has expired");
    } else {
      res.status(200).send({
        email: user.local.email,
        message: "password reset link is okay"
      })
    }
  })
});

router.put("/updatePasswordViaEmail", (req, res, next) => {
  User.findOne({
    "local.email": req.body.email
  }).then(async user => {
    if (user != null) {
      console.log("user exists in db");
      //generate a password hash(salt + hash)
      const salt = await bcrypt.genSalt(12);
      user.local.password = await bcrypt.hash(req.body.password, salt);
      user.passwordResetToken = "";
      user.save().then(() => {
        console.log("password updated");
        res.status(200).send({ message: "password updated" });
      });
    } else {
      console.log("no user exists in db to update");
      res.status(404).send({ error: "no user exists in db to update" });
    }
  })
});

router.post("/signin/reset/:token", (req, res) => {
  // Validate password Input
  const { error } = validatePassword(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });
  // Find a matching token
  Token.findOne({ token: req.params.token }, function (err, token) {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!token)
      return res.status(400).send({
        message: "This token is not valid. Your token my have expired.",
      });

    // If we found a token, find a matching user
    User.findById(token._userId, function (err, user) {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (!user)
        return res
          .status(400)
          .send({ message: `We were unable to find a user for this token.` });
      if (user.passwordResetToken !== token.token)
        return res.status(400).send({
          message:
            "User token and your token didn't match. You may have a more recent token in your mail list.",
        });
      // Verify that the user token expires date has not been passed
      if (moment().utcOffset(0) > user.passwordResetExpires) {
        return res.status(400).send({
          message: "Token has expired.",
        });
      }
      // Update user
      user.password = req.body.password;
      user.passwordResetToken = "nope";
      user.passwordResetExpires = moment().utcOffset(0);
      //Hash new password
      user.hashPassword().then(() =>
        // Save updated user to the database
        user.save(function (err) {
          if (err) {
            return res.status(500).send({ message: err.message });
          }
          // Send mail confirming password change to the user
          const mail = {
            to: user.email,
            from: creds.USER,
            subject: "Your password has been changed",
            text: "Some useless text",
            html: `<p>This is a confirmation that the password for your account ${user.email} has just been changed. </p>`,
          };
          transporter.sendMail(mail).catch((error) => {
            return res.status(500).send({ message: error });
          });
          return res
            .status(200)
            .send({ message: "Password has been reset. Please log in." });
        })
      );
    });
  });
});

router.post("/resend", (req, res) => {
  // Check for validation errors
  const { error } = validateEmail(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!user)
      return res
        .status(400)
        .send({ message: "We were unable to find a user with that email." });
    if (user.isVerified)
      return res.status(400).send({
        message: "This account has already been verified. Please log in.",
      });

    // Create a verification token, save it, and send email
    var token = new Token({
      _userId: user._id,
      token: crypto.randomBytes(16).toString("hex"),
    });

    // Save the token
    token.save(function (err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      // Send the mail
      const mail = {
        to: user.email,
        from: `istabrak.jrad@gmail.com`,
        subject: "Email Verification",
        text: "Some uselss text",
        html: `<p>Please verify your account by clicking the link: 
        <a href="https://localhost:3000/account/confirm/${token.token}">https://localhost:3000/account/confirm/${token.token}</a> </p>`,
      };
      transporter
        .send(mail)
        .then(() => {
          return res
            .status(200)
            .send({ message: "A verification mail has been sent." });
        })
        .catch((error) => {
          return res.status(500).send({ message: error });
        });
    });
  });
});

// Delete user with the email if is unverified
router.post("/register/reset", (req, res) => {
  const { error } = validateEmail(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  User.findOneAndDelete({ email: req.body.email, isVerified: false }, function (
    err
  ) {
    if (err) {
      return res.status(500).send(err.message);
    }
    return res
      .status(200)
      .send({ message: "You can use the same username ;)" });
  });
});
  
module.exports= router;