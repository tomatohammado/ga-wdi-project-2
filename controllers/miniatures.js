const mongoose = require('../db/connection')
const Miniature = mongoose.model('Miniature')

/* express-passport-authentication uses an extra parameter called 'next' */
function getMiniatures (req, res) {
  Miniature.find({})
  .then(miniatures => {
    res.render('homepage', {miniatures: miniatures})
  })
}

function postMiniature (req, res) {
  // console.log(req.body.newMiniature)
  // res.redirect('/')
  Miniature.create(req.body.newMiniature)
   .then(_ => {
     res.redirect('/')
   })
}

module.exports = {
  getMiniatures: getMiniatures,
  postMiniature: postMiniature
}
