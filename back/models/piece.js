const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    ref : {
        type : String,
        required : true
    },
    desig  : {
        type : String,
        required : true
    },
    nom  : {
        type : String,
        required : true
    },
    prix : {
        type : Number,
        required: true,
        default: 0
    },
    qte : {
        type : Number,
        required : true
    },
    remise  : {
        type : Number,
        required : true
    },
    file  : {
        type : String,
    },
    categ  : {
        type : String,
        required : true
    },
    modele : {
        type : String,
        required : true
    },
    marque : {
        type : String ,
        required : true 
    },
    countInStock: {
         type: Number,
          default: 0,
           required: true 
    },
    


    
    
});;

module.exports = mongoose.model('piece',PostSchema);
