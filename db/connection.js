const mongoose = require('./models/miniature')

/* as of Mongoose v5, I don't think I need to define the promise since it should use the native Promise by default
// changelog: https://github.com/Automattic/mongoose/blob/master/History.md
*/
mongoose.Promise = Promise

const mongoUri = 'mongodb://localhost/star_wars_miniatures'

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL, { useMongoClient: true })
} else {
  mongoose.connect(mongoUri, { useMongoClient: true })
    .then(connection => console.log(`connection established to db ${connection.db.databaseName}`))
    .catch(error => console.log('Connection Failed!', error))
}

module.exports = mongoose
