  
const JWT = require('jsonwebtoken');    
const User = require('../models/user');
const Admin = require('../models/admin');
const {JWT_SECRET} = require ('../configuration');
const Magasinier = require('../models/magasinier');
const Transporteur=require('../models/transporteur')
const nodemailer = require('nodemailer')
const creds = require('../configuration/index');

signToken = user => {
    return JWT.sign({
        isAdmin : user.isAdmin,
        isMaga : user.isMaga,
        isClient : user.isClient,
        id : user._id,       
        iss : 'jobboard',
        sub : user.id,
        iat: new Date().getTime(),
        exp : new Date().setDate(new Date().getDate()+1)
    },JWT_SECRET)
}

module.exports = {
    signUp: async (req, res, next) => {
       // const {nom,prenom,email, password,repeat_password,tel} = req.value.body;

        //check if there is user with same email
        const FoundUser = await User.findOne({"local.email":req.body.email});
        if (FoundUser){
            return res.status(403).send({error : 'email is already in use'})}
        //create new user 
        const newUser = new  User ({
            method : 'local',
            local : {
                nom : req.body.nom,
                prenom : req.body.prenom,
                email :req.body.email ,
                password: req.body.password,
                repeat_password : req.body.repeat_password,
                tel : req.body.tel,
                isClient : true,
                isAdmin : false
            }
            });
        await newUser.save();

        //Generate the token 
        const token = signToken(newUser);
        
        
        //respond with token
        res.status(200).json({token})
        },
        signUpM: async (req, res, next) => {
         //   const {nom,prenom,email, password,repeat_password,tel} = req.value.body;
    
            //check if there is user with same email
            const FoundUser = await Magasinier.findOne({"local.email":req.body.email});
            if (FoundUser){
                return res.status(403).send({error : 'email is already in use'})}
            //create new user 
            const newMag = new  Magasinier ({
                method : 'local',
                local : {
                    nom : req.body.nom,
                    prenom : req.body.prenom,
                    email :req.body.email ,
                    cin : req.body.cin,
                    password: req.body.password,
                    repeat_password : req.body.repeat_password,
                    tel : req.body.tel,
                    type : req.body.type ,
                    isClient : false,
                    isMaga : true
                }
                });
            await newMag.save();
    
            //Generate the token 
            const token = signToken(newMag);
            
            
            //respond with token
            res.status(200).json({token})
            },
    signIn: async (req, res, next) =>{
            //Generate token 
            const signinUser= signToken(req.user)
            console.log(signinUser);
            
              if (signinUser) {              
                res.send({
                  token: signToken(signinUser),
                  id : req.user._id,
                  isClient : req.user.local.isClient,
                  isAdmin : req.user.local.isAdmin ,
                  isMaga:    req.user.local.isMaga
                });
              }
        },
    googleOAuth : async(req, res, next) => {
        
        const token = signToken(req.user);
        res.status(200).json({token});
    },
    facebookOAuth : async(req, res, next) =>{
       const token = signToken(req.user);
       res.status(200).json({token});
    },
    secret: async (req, res, next) =>{
     console.log('test') ;
     res.json(req.user);
    },
    secretA: async (req, res, next) =>{
        console.log('test') ;
        res.json(req.admin);
       },
    secretM: async (req, res, next) =>{
        console.log('test') ;
        res.json(req.mag);
       },
    signOut: async (req, res, next) => {
        res.clearLocalStorage('access_token');
        res.json({ success: true });
      },

    register: async (req, res, next) => {
        //const {nom,prenom,tel,cin,email,user, password,repeat_password,} = req.value.body;

        //check if there is user with same email
        const FoundAdmin = await Admin.findOne({"local.email":req.body.email});
        if (FoundAdmin){
            return res.status(403).send({error : 'email lready in use'})}
        //create new user 
        const newAdmin = new  Admin ({
            method : 'local',
                local : {
                nom : "Bhouri ",
                prenom : "Slouma",
                tel : "+216 73 531 139",
                email :"imen.hmida02@gmail.com" ,
                password: "azertyAdmin",
                repeat_password : "azertyAdmin",
                isAdmin : true
             }});
             await newAdmin.save();
    
             //Generate the token 
             const token = signToken(newAdmin);
             
             
             //respond with token
             res.status(200).json({token})
        },
        updatePassword: function(req, res){
            User.findOne({ email: req.body.email }, function (errorFind, userData) {
                if(userData.token==req.body.linkDate && req.body.password==req.body.confirm_password)
                {
                    bcrypt.genSalt(10, (errB, salt) => {
                        bcrypt.hash(req.body.password, salt, (err, hash) => {
                            if (err) throw err;
                            let newPassword = hash;
                            let condition = { _id: userData._id };
                            let dataForUpdate = { password: newPassword,updatedDate: new Date() };
                            User.findOneAndUpdate(condition, dataForUpdate, { new: true }, function (error, updatedUser) {
                                if (error) {
                                    if (err.name === 'MongoError' && error.code === 11000) {
                                      return res.status(500).json({msg:'Mongo Db Error', error:error.message});
                                    }else{
                                        return res.status(500).json({msg:'Unknown Server Error', error:'Unknow server error when updating User'});
                                    }
                                }
                                else{
                                        if (!updatedUser) {
                                            return res.status(404).json({
                                                msg: "User Not Found.",
                                                success: false
                                            });
                                        }else{
                                        return res.status(200).json({
                                            success: true,
                                            msg: "Your password are Successfully Updated",
                                            updatedData: updatedUser
                                        });
                                    }
                                }
                            });
                        });
                    });
                }
                if (errorFind)
                {
                        return res.status(401).json({
                        msg: "Something Went Wrong",
                        success: false
                    });
                }
            }
            );
           
        },
        reset: function  (req, res) {
            User.findOne({ 'local.email': req.body.email }, function (error, userData) {
                var transporter = nodemailer.createTransport({
                    // service: 'gmail',//smtp.gmail.com  //in place of service use host...
        
                    // auth: {
                    //     user: 'ashutosh.choubey@codeclouds.in',
                    //     pass: 'ashu@q@w3e4r%'
                    // }
                    host:  'smtp.gmail.com',
                    auth: {
                        user: creds.USER,
                        pass: creds.PASS
                    }
        
                });
                var currentDateTime = new Date();
                var mailOptions = {
                    from: 'hammazitouni77@gmail.com',
                    to: req.body.email,
                    subject: 'Password Reset',
                    // text: 'That was easy!',
                    html: "<h1>Welcome To Daily Task Report ! </h1><p>\
                    <h3>Hello "+userData.local.nom+"</h3>\
                    If You are requested to reset your password then click on below link<br/>\
                    <a href='http://localhost:3000/change-password/"+currentDateTime+"+++"+userData.local.email+"'>Click On This Link</a>\
                    </p>"
                };                
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        User.updateOne({email: userData.email}, {
                            token: currentDateTime, 
                            
                        },  {multi:true},function(err, affected, resp) {
                            return res.status(200).json({
                                success: false,
                                msg: info.response,
                                userlist: resp
                            });
                        })
                    }
                });
            })
        },
        count : async(req, res)=>{
            try {
                const numOfUser = await User.find().count()
                res.json(numOfUser)
            } catch (error) {
                res.json({ message : error });
            }
        },
        countM : async(req, res)=>{
            try {
                const numOfUser = await User.find().count()
                res.json(numOfUser)
            } catch (error) {
                res.json({ message : error });
            }
        },
        all : async(req,res )=>{
            try {
                const number = await Magasinier.find()
                res.json(number)
            } catch (error) {
                res.json({message : error});
            }
        },
        one : async( req,res )=>{
            try {
                const removedmag = await Magasinier.remove({ _id: req.params.MagId });
                res.json(removedmag);
             } catch (error) {
                 res.json({ message : error });
             }
        },
        profileA : async (req, res, next)=>{
            try {
                const client =await User.findById(req.params.id)
                res.json(client)
            } catch (error) {
                console.log(error);
                
            }
        },
        profileT : async (req, res, next)=>{
            try {
                const client =await User.findById(req.params.id)
                res.json(client)
            } catch (error) {
                console.log(error);
                
            }
        },
        allTrans : async (req, res) => {
            try {
                const transporteurs = await Transporteur.find();
                res.json(transporteurs);
             } catch (error) {
                 res.json({ message : error });
             }
          },
        
        oneTrans : async (req, res) => {
            try {
                const transporteur = await Transporteur.findById(req.params.id);
                res.json(transporteur);
             } catch (error) {
                 res.json({ message : error });
             }
        },
        SignupT : async (req, res)=>{
            const Foundtrans = await Transporteur.findOne({"local.email":req.body.email});
                if (Foundtrans){
                    return res.status(403).send({error : 'email lready in use'})}
            const newTrans = new  Transporteur ({
                method : 'local',
                local : {
                    nom : req.body.nom,
                    prenom : req.body.prenom,
                    email :req.body.email ,
                    cin : req.body.cin,
                    password: req.body.password,
                    repeat_password : req.body.repeat_password,
                    tel : req.body.tel,          
                }
                });
            const Trans =await newTrans.save();
            res.send(Trans);
        
          },
        
        
        delTrans : async (req, res)=>{
            try {
                const removedtrans = await Transporteur.remove({ _id: req.params.id });
                res.json(removedtrans);
             } catch (error) {
                 res.json({ message : error });
             }
        },
    
}