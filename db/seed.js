const mongoose = require('./connection')
const seedData = require('./seedData.json')

const Miniature = mongoose.model('Miniature')

Miniature.remove({})
  /* batch insert, the way we were taught. Does not validate seedData */
  // .then(_ => Miniature.collection.insert(seedData))

  /* less efficient, but validates. the second .then() needs to be after the .create() method because it returns a Promise itself (won't work otherwise)
  */
  .then(_ => Miniature.create(seedData).then(_ => process.exit()))
  .catch(error => console.log(error))
