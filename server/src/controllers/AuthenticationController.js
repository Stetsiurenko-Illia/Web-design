const {User} = require('../models/')
const jwt = require('jsonwebtoken')
const config = require('../config/config.js')
const bcrypt = require('bcrypt')

var salt = bcrypt.genSaltSync();

function jwtSignUser(user){
    const ONE_WEEK = 60 * 60 *24 *7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}


module.exports = {
    async register (req, res) {               
        try{
            const user = await User.create(req.body) 
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
            console.log(userJson)
        } catch (err) {
            res.status(400).send({
                error: `This email account is already in use.${err}`
            })
        } 
    },

    async login (req, res) {
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            }) 
            if(!user){
                return res.status(403).send({
                    error: 'The login information was incorrect.'
                })
            }
  
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                  return res.status(500).json({ error: `An error has occured trying to log in. ${err}` });
                }
                
                user.password = hash
                bcrypt.compare(password, hash, function(err, result) {
                    if (err) throw (err) 
                    console.log(result)
                    if (!result) {
                        return res.status(403).json({ error: 'Invalid password.' });
                      }
                  });
                           
                  const userJson = user.toJSON()
                  res.send({
                    user: userJson,
                    token: jwtSignUser(userJson)
                  })
              });

        } catch (err) {
            res.status(500).send({
                error: `An error has occured trying to log in. ${err}`
            })
        }
    }
}