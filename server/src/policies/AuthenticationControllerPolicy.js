const Joi = require('joi')

const validStatusValues = ['Male', 'Female'];

module.exports = {
    register(req, res, next){
        const schema = Joi.object({
            firstname: Joi.string().regex(
              new RegExp('^[a-zA-Z]{1,100}$')
            ),
            lastname: Joi.string().regex(
              new RegExp('^[a-zA-Z]{1,100}$')
            ),
            date: Joi.date().required(),
            gender: Joi.string().valid(...validStatusValues).required(),
            email: Joi.string().email(),
            password: Joi.string().regex(
              new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
          })          
            
        const { error } = schema.validate(req.body)
        if(error){
            switch(error.details[0].context.key){
                case 'firstname':
                    res.status(400).send({
                        error:'You have not entered a first name'
                    })
                    break
                case 'lastname' :
                    res.status(400).send({
                        error:'You have not entered a last name'
                    })
                    break
                case 'email':
                    res.status(400).send({
                        error:'You must provide a valid email address'
                    })
                    break
                    case 'date' :
                    res.status(400).send({
                        error: 'You have not selected a date of birth'
                    })
                    break
                case 'gender' :
                    res.status(400).send({
                        error: 'You have not selected a gender'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to ,atch the following rules:
                        <br>
                        1. It must contain ONLY the following characters: lower case, upper case, numerics.
                        <br>
                        2. It maust be at least 8 characters in length and not greater than 32 characters in length.
                        `
                    })
                    break
                default:
                    res. status(400).send({
                        error: `Invalid registation information ${error}`
                    })
            }
        }else{
            next()
        }
        
    }
}
