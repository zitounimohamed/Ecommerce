
const mongoose = require('mongoose');


const fileS = mongoose.Schema({
 

file: {
    type: String,
    }

})

module.exports= mongoose.model('fileS',fileS);