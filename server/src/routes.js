const SignupController = require('./controllers/SignupController')

const SignupControllerPolicy = require('./policies/SignupControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    SignupControllerPolicy.register,
    SignupController.register)
}
