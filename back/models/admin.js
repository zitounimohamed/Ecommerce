const mongoose = require('mongoose') ;
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;


//create schema 
const AdminSchema = new Schema({
    methods: {
        type : String ,
        enum : ['local']
    },
    local : {
        isAdmin : {
            type : Boolean,
            required : true
        },
        nom : {
            type: String,
            required : true
        },
        prenom: {
            type: String,
            required : true
        } ,
        tel : {
            type : String,
            required : true
        },
        
        email: {
            type: String,
            required : true
        } ,
        
        password : {
            type : String,
            required : true
        },
        repeat_password : {
            type: String,
            ref : 'password'
        },
}
    });

AdminSchema.pre('save', async function(next){
    try {
        //generete salt 
        const salt = await bcrypt.genSalt(10);
        //generete a password hash(salt + hash)
        const passwordhash = await bcrypt.hash(this.local.password,salt);
        this.local.password=passwordhash;
        next();

    } catch (error) {
        next (error);
    }
});



AdminSchema.methods.isValidA = async function (newpassword) {
    try {
        return await bcrypt.compare(newpassword,this.local.password);
    } catch (error) {
        throw new Error (error);
    }
}
   
// create model 
Admin = mongoose.model('admin',AdminSchema); 

//Export model 
module.exports= Admin ;