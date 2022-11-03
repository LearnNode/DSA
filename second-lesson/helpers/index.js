const mongoose = require('mongoose');
const mongoAtlasUri = 'mongodb://localhost:27017/basics';

const mongooseConnection = () => {
  try {
    mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
      console.log('mongoose is connected');
    })
  } catch (error) {
    console.log('Could not connect');
  }
};

const dbConnection = mongoose.connection;


//bind db connection to to error event
dbConnection.on('error', (error) => {
  console.log(`Connection error ${error}`);
});

dbConnection.once('open', () => {
  console.log('Connected to database');
});

module.exports = mongooseConnection;