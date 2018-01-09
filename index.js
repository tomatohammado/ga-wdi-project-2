const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 4000)
app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname: '.hbs',
  partialDir: 'views/',
  layoutsDir: '/view',
  defaultLayout: 'layout-main'
}))

/* do I need _both_ of these lines? probably not
// maybe don't need 'assets/' either */
// app.use('/{assets}', express.static('public'))
app.use(express.static(path.join(__dirname, '/public')))
app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

/* I cannot use an arrow function here because I use this.address().port */
app.listen(app.get('port'), function () {
  console.log(`App started on port ${this.address().port}`)
})
