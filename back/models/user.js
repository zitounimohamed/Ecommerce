const mongoose = require('mongoose') ;
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

//create schema 

const userSchema = new Schema({
    method : {
        type: String,
        enum : ['local','google','facebook'],
        required : true 
    },
    local : {
        isClient : {
            type : Boolean
        },
        nom : {
            type: String,
            lowercase : true 
        },
        prenom : {
            type: String,
            lowercase : true
        },
        email: {
            type: String,
            lowercase: true,
            min: [5, 'Too short, min is 5 characters'],
            max: [32, 'Too long, max is 32 characters'],
            unique: true, 
            required: 'Email is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        } ,
        password : {
            type : String,
            min: [5, 'Too short, min is 5 characters'],
            max: [32, 'Too long, max is 32 characters'],
            required: 'Password is required'
        },
        repeat_password : {
            type: String
        },
        tel : {
            type : Number,

        }
    },
    google : {
        id: {
            type : String ,

        },
        email : {
            type :String , 
            lowercase : true 
        }
    },
    facebook : {
        id: {
            type : String 

        },
        email : {
            type :String , 
            lowercase : true 
        }
        
    },
    
   
})

userSchema.pre('save', async function(next){
    try {

        if(this.method !== 'local') {
            next();
        }
        //generate salt
        const salt = await bcrypt.genSalt(10);
        //generate a password hash(salt + hash)
        const passwordhash = await bcrypt.hash(this.local.password,salt);
        this.local.password= passwordhash ; 
        next(); 
        
    } catch (error) {
        next(error);
    }
});

userSchema.methods.isValidPass = async function(newpassword) {
    try {
        return await bcrypt.compare(newpassword,this.local.password) ;
    } catch (error) {
        throw new Error(error);
    }
}

userSchema.statics.EncryptPassword = async function(password) {  const hash = await bcrypt.hash(password, 12);  return hash;};

// create model 
const User =mongoose.model('user',userSchema);


//Export model 
module.exports= User ;