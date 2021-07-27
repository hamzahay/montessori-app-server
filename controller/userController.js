const { User } = require('../models')
const { comparePass } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class Controller {

  static async register (req, res, next) {
    try {
      const { email, name, age, parentPin } = req.body
      const user = await User.create({ email, name, age, parentPin })
      res.status(201).json({
        id: user.id,
        email: user.email,
        name: user.name
      })
    } catch (err) {
      console.log(err)
      console.log(err.name)
      console.log(err.message)
      next (err)
    }
  }

  static async login (req, res, next) {
    try {
      const { email, parentPin } = req.body
      const user = await User.findOne({ where: { email }})
      if (user && comparePass(parentPin, user.parentPin)) {
        const payload = {
          id: user.id,
          email: user.email
        }
        const access_token = generateToken(payload)
        res.status(200).json({
          email: user.email,
          name: user.name,
          age: user.age,
          access_token
        })
      } else {
        throw ({ name: 401, message: 'wrong email / password' })
      }
    } catch (err) {
      console.log(err)
      next (err)
    }
  }

  static async checkPin (req, res, next) {
    try {
      const { parentPin } = req.body
      const id = req.UserId
      const user = await User.findByPk(id)
      const result = comparePass(parentPin, user.parentPin)
      res.status(200).json({
        id: id,
        result: result
      })
    } catch (err) {
      console.log(err)
      next (err)
    }
  }
}

module.exports = Controller