const express = require('express')
const router = express.Router()

const miniaturesController = require('../controllers/miniatures')

router.route('/')
  .get(miniaturesController.getMiniatures)
  .post(miniaturesController.postMiniature)

router.route('/miniatures/:miniatureId')
  .get(miniaturesController.getMiniature)
  .put(miniaturesController.putMiniature)
  .delete(miniaturesController.deleteMiniature)

module.exports = router
