'use strict';
const mongoose = require('mongoose');
const DogWalker = new mongoose.Schema({
  name: String,
  max_dogs: Number
});

module.exports = mongoose.model('dogWalker', DogWalker);
