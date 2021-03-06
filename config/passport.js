const LocalStrategy = require('passport-local').Strategy
const mongoose = require('../db/models/user')
const User = mongoose.model('User')

module.exports = (passport) => {
  passport.serializeUser((user, callback) => {
    callback(null, user.id)
  })

  passport.deserializeUser((id, callback) => {
    User.findById(id, (err, user) => {
      callback(err, user)
    })
  })

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, callback) => {
    /* Find a User with this email */
    User.findOne({ 'local.email': email }, (err, user) => {
      if (err) return callback(err)

      /* If there already is a user with this email */
      if (user) {
        return callback(null, false, req.flash('signupMessage', 'This email is already used.'))
      } else {
        /* There is no email registered with this email, create a new user */
        let newUser = new User()
        newUser.local.email = email
        newUser.local.password = newUser.encrypt(password)

        newUser.save((err) => {
          if (err) throw err
          return callback(null, newUser)
        })
      }
    })
  }))

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, callback) => {
    /* Search for a user with this email */
    User.findOne({ 'local.email': email }, (err, user) => {
      if (err) {
        return callback(err)
      }

      /* If no user is found */
      if (!user) {
        return callback(null, false, req.flash('loginMessage', 'No user found.'))
      }

      /* Wrong password */
      if (!user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'))
      }

      return callback(null, user)
    })
  }))
}
