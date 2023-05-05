const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
const ListController = require('./controllers/ListController.js')

module.exports = (app) =>{
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)   
    
    app.post('/login',  AuthenticationController.login)

    app.post('/find-timers', ListController.index)

    app.post('/save-timers', ListController.postTimer)
}
