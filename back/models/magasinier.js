const mongoose = require('mongoose') ;
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

//create schema 

const magSchema = new Schema({
    method : {
        type: String,
        enum : ['local'],
        required : true 
    },
    local : {
        isMaga : {
            type : Boolean
        },
        isClient : {
            type : Boolean,
            required: true

        },
        cin : {
            type: Number,
            required: true

        },
        nom : {
            type: String,
            required: true

        },
        prenom : {
            type: String,
            required: true

        },
        type : {
            type : String,
            required : true
        },
        email: {
            type: String,
            required: true
        } ,
        password : {
            type : String,
            required: true
        },
        repeat_password : {
            type: String,
            ref : 'password'
        },
        tel : {
            type : Number,

        }
    }
})

magSchema.pre('save', async function(next){
    try {

       
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

magSchema.methods.isValidM = async function(newpassword) {
    try {
        return await bcrypt.compare(newpassword,this.local.password) ;
    } catch (error) {
        throw new Error(error);
    }
}

const Magasinier =mongoose.model('Magasinier',magSchema);
//Export model 
module.exports= Magasinier ;