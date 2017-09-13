const Joi = require ('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      name: Joi.string(),
      email: Joi.string().email(),
      pledge: Joi.number().integer()
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'name':
          res.status(400).send({
            error: 'You must use a real name'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
