'use strict'
const mongoose = require('mongoose');
const Frenchie = new mongoose.Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('frenchie', Frenchie);
