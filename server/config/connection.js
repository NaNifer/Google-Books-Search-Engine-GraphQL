const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;






// If mongoose doesn't work, try: mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.i3o3tur.mongodb.net/googlebooks?retryWrites=true&w=majority

