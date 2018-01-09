const mongoose = require('../db/connection')
const Miniature = mongoose.model('Miniature')

/* express-passport-authentication uses an extra parameter called 'next' */
function getMiniatures (req, res) {
  Miniature.find({})
  .then(miniatures => {
    res.render('homepage', {miniatures: miniatures})
  })
}

module.exports = {
  getMiniatures: getMiniatures
}
