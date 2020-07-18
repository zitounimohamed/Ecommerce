const passport = require('passport');
const JwtStrategy= require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;  
const GooglePlusTokenStrategy = require('passport-google-plus-token'); 
const FacebookTokenStrategy = require('passport-facebook-token');
const config = require('./configuration');
const User = require('./models/user');
const AdminS = require('./models/admin')
const Magasinier =require('./models/magasinier');
const Transporteur = require('./models/transporteur');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.JWT_SECRET,
},async  (payload,done)=>{
    try{
        //find the user specified in token 
            const user = await User.findById(payload.sub);
            //if user doesn't exist 

            if (!user) {
                const admin = await AdminS.findById(payload.sub);
                if(!admin){
                  const magasinier = await Magasinier.findById(payload.sub) 
                  if(!magasinier){
                      const transporteur = await Transporteur.findById(payload.sub)
                      if(transporteur){
                          done(null,transporteur)
                      }
                    done(null,magasinier)
                  }    
                }
                done(null,admin)
            }
        //otherwise , return user
        done(null,user); 
    }catch(error){
            done(error,false);
            
    }
    
}));


//Google 0Auth Strategy
passport.use('googleToken',new GooglePlusTokenStrategy({
    clientID : config.oauth.google.clientID ,
    clientSecret : config.oauth.google.clientSecret
},async (accesToken, refreshToken, profile, done )=>{
    try {
        console.log('accesToken', accesToken);
        console.log('refreshToken',refreshToken);
        console.log('profile',profile);

        //check wether this current user exist in DB
        const existingUser = await User.findOne({"google.id": profile.id})
        if(existingUser){
            console.log("user already exist");
            
            return done(null,existingUser);
        }
            console.log("don t exist !! new user creation");
            
        //if new account 
        const newUser = new User({
            method : 'google',
            google : {
                id : profile.id,
                email : profile.emails[0].value
            }
        });
        await newUser.save();
        done(null,newUser);
    } catch (error) {
        done(error,false, error.message);
    }
    
}));


//facebook strategy 
passport.use('facebookToken', new FacebookTokenStrategy({
    clientID : config.oauth.facebook.clientID,
    clientSecret : config.oauth.facebook.clientSecret
}, async (accesToken, refreshToken,profile,done)=> {
    try {
        console.log('profile', profile);
        console.log('accestoken',accesToken);
        console.log('refreshtoken',refreshToken);
        const existingUser = await User.findOne({ "facebook.id": profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
    
        const newUser = new User({
          method: 'facebook',
          facebook: {
            id: profile.id,
            gender : profile.gender,
            email: profile.emails[0].value
          }
        });
    
        await newUser.save();
        done(null, newUser);
      } catch(error) {
        done(error, false, error.message);
      }
}));


// local strategy 
passport.use(new LocalStrategy({
    usernameField : 'email',
    
},async (email,password,done)=>{
   try {
        //Find user given email 
    const user = await Magasinier.findOne({'local.email' :email} );
    //if not 
    if(!user) {
        const userEm = await User.findOne({'local.email' :email})  
        
        if(!userEm)
        //if not 
        {
            const admin = await AdminS.findOne({'local.email' : email})
            if(!admin){
                const transporteur = await Transporteur.findOne({'local.email' : email})    
                if(transporteur){
                    const isMatch = await transporteur.isValidT(password)
                    if(!isMatch){
                        return done(null,false)
                    }
                 //otherwise return user 
                    return done(null,transporteur)
                }
            }else{
                const isMatch = await admin.isValidA(password)
                if(!isMatch){
                    return done(null,false)
                }
                //otherwise return user 

                return done(null,admin)
            }
        }else
        {
            const isMatch =await userEm.isValidPass(password);
            
            // if not 
            if (!isMatch){
                return done(null,false);
            }
            //otherwise return user 
            done(null,userEm);
        }
        
    }else {
    //otherwise check if pw correct 
    const isMatch =await user.isValidM(password);
   
    // if not 
    if (!isMatch){
         return done(null,false);
    }
    //otherwise return user 
    done(null,user);
    }

    
   } catch (error) {
       done(error,false);
       
   }
}));