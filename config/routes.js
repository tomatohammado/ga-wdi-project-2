const express = require('express')
const router = express.Router()

const miniaturesController = require('../controllers/miniatures')

router.route('/')
  .get(miniaturesController.getMiniatures)
  .post(miniaturesController.postMiniature)
module.exports = router
