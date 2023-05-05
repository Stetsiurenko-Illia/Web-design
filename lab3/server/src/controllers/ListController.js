const { User } = require("../models/");
const jwt = require('jsonwebtoken')
const config = require('../config/config.js')

function jwtSignUser(user){
    const ONE_WEEK = 60 * 60 *24 *7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
  async index(req, res) {
    const email = req.body.email
    console.log('start find', email);
    console.log(req.body);
    try {
        const user = await User.findOne({
          where: { email: email }
        })
    
        if (!user) {
          res.status(404).send("User not found");
        } else {
            const userJson = user.toJSON()
            res.send({
              user: userJson,
              token: jwtSignUser(userJson)
            })
        }
      } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error. ${error}`);
      }
  },

  async postTimer(req, res) {
    const email = req.body.email;
    const timers = req.body.timers;
    User.update({ timers: timers }, { where: { email: email } })
      .then(() => console.log("Рядок успішно оновлено"))
      .catch((err) => console.error("Помилка оновлення рядка", err));
    
    res.send(timers);
  },
};
