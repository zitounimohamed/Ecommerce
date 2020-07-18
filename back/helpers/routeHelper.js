const Joi = require('joi');


module.exports={
   
    schemas: {
        authSchema : Joi.object().keys({
            email : Joi.string().email().required(),
            nom : Joi.string().required(),
            prenom : Joi.string().required(),
            password : Joi.string().required() ,
            repeat_password: Joi.ref('password'),
            tel : Joi.number().integer().required()
                

            
        }),
        lSchema : Joi.object().keys({
            email : Joi.string().email().required(),
            password : Joi.string().required()
        }),
      
        aSchema : Joi.object().keys({
            nom : Joi.string().required(),
            prenom : Joi.string().required(),
            tel : Joi.number().integer().required(),
            cin : Joi.number().integer().required(),
            email : Joi.string().email().required(),
            user : Joi.string().required(),
            password : Joi.string().required() ,
            repeat_password: Joi.ref('password')
        })
        
    }
}