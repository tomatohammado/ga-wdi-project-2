const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')
const passport = require('passport')
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()

app.set('port', process.env.PORT || 4000)
app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname: '.hbs',
  partialDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout-main'
}))

app.use(morgan('dev'))
app.use(cookieParser())
/* the express-authorization lesson had this line, don't know if I need it */
// app.use(bodyParser())

app.use(express.static(path.join(__dirname, '/public')))
app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({ secret: 'Hmod\'s Star Wars Miniatures App' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

require('./config/passport')(passport)

app.use((req, res, next) => {
  res.locals.currentUser = req.user
  /* ahhhh - there's that 'next' argument. looks like I'll need it after all */
  next()
})

const routesMiniatures = require('./config/routesMiniatures')
app.use(routesMiniatures)

/* I cannot use an arrow function here because I use this.address().port */
app.listen(app.get('port'), function () {
  console.log(`App started on port ${this.address().port}`)
})
