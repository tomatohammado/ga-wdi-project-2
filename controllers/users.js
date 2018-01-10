const passport = require('passport')

/* GET /signup */
function getSignup (req, res, next) {
  res.render('signup', { message: req.flash('signupMessage') })
}

/* POST /signup */
function postSignup (req, res, next) {
  let signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  })

  return signupStrategy(req, res, next)
}

/* GET /login */
function getLogin (req, res, next) {
  res.render('login', { message: req.flash('loginMessage') })
}

/* POST /login */
function postLogin (req, res, next) {
  let loginProperty = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })

  return loginProperty(req, res, next)
}

/* GET /logout */
function getLogout (req, res, next) {
  req.logout()
  res.redirect('/')
}

/* restricted page */
function secret (req, res) {
  res.render('secret')
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret
}
