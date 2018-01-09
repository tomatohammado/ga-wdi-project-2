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

/* do I need _both_ of these lines?
// my gut says the second one is what I want (would work for deployment) */
app.use('/assets', express.static('public'))
app.use(express.static(path.join(__dirname, '/public')))
app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.listen(app.get('port'), _ => {
  console.log('Server started on port 4000')
})
