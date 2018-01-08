const mongoose = require('mongoose')

const MiniatureSchema = new mongoose.Schema({
  name: String,
  image_url: String
})

mongoose.model('Miniature', MiniatureSchema)

module.export = mongoose
