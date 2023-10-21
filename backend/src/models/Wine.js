const mongoose = require('mongoose');

const wineSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
});

const Wine = mongoose.model('Wine', wineSchema);

module.exports = Wine;
