const mongoose = require('./connection')
const seedData = require('./seedData.json')

const Miniature = mongoose.model('Miniature')

Miniature.remove({})
  .then(_ => Miniature.collection.insert(seedData))
  .then(_ => process.exit())
  .catch(error => console.log(error))
