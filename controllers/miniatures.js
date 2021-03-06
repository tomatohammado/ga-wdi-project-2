const mongoose = require('../db/connection')
const Miniature = mongoose.model('Miniature')

/* express-authentication uses an extra parameter called 'next' */
function getMiniatures (req, res) {
  Miniature.find({})
  .then(miniatures => {
    res.render('homepage', {miniatures: miniatures})
  })
}

function postMiniature (req, res) {
  Miniature.create(req.body.newMiniature)
   .then(_ => res.redirect('/'))
}

function getMiniature (req, res) {
  Miniature.findOne({ _id: req.params.miniatureId })
    .then(miniature => {
      res.render('miniature-item', {miniature: miniature})
    })
}

function putMiniature (req, res) {
  Miniature.findByIdAndUpdate(req.params.miniatureId, req.body.updateMiniature, { new: true })
    .then(miniature => res.redirect(`/miniatures/${miniature._id}`))
}

function deleteMiniature (req, res) {
  Miniature.findByIdAndRemove(req.params.miniatureId)
    .then(_ => res.redirect('/'))
}

module.exports = {
  getMiniatures: getMiniatures,
  postMiniature: postMiniature,
  getMiniature: getMiniature,
  putMiniature: putMiniature,
  deleteMiniature: deleteMiniature
}
