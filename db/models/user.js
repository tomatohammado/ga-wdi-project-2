const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const User = new mongoose.Schema({
  local: {
    email: String,
    password: String
  }
})

User.methods.encrypt = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password)
}

/* uh...this is a little different from the express-auth lesson */
mongoose.model('User', User)

module.exports = mongoose
