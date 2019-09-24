const mongoose = require('mongoose');

const server = 'localhost:27017';
const database = 'apiTest';
const user = 'useradmin';
const password = 'thepianohasbeendrinking';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);
