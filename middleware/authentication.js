const { User } = require('../models')
const { verifyToken } = require('../helper/jwt')

async function authenticate (req, res, next) {
  try {
    if (req.headers.access_token) {
      const { id } = verifyToken(req.headers.access_token)
      const user = await User.findByPk(id)
      if (user) {
        req.UserId = user.id
        next()
      } else {
        throw ({ name: 403, message: 'Forbidden' })
      }
    } else {
      throw ({ name: 401, message: 'please login first' })
    }
  } catch (err) {
    console.log(err)
    // next (err)
  }
}

module.exports = {
  authenticate
}