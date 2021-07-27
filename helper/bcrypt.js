const bcrypt = require('bcrypt')
const saltRound = 10

function hashPass (password) {
  const salt = bcrypt.genSaltSync(saltRound)
  return bcrypt.hashSync(password, salt)
}

function comparePass (inputPpassword, hashedPass) {
  const result = bcrypt.compareSync(inputPpassword, hashedPass)
  return result
}

module.exports = {
  hashPass,
  comparePass
}