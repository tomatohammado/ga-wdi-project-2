const mongoose = require('mongoose')

const MiniatureSchema = new mongoose.Schema({
  name: String,
  imageUrl: String
})

mongoose.model('Miniature', MiniatureSchema)

module.export = mongoose
