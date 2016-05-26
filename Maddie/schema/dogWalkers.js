'use strict';
const mongoose = require('mongoose');
const DogWalkers = new mongoose.Schema({
  name: String
  max dogs: Number
});

module.exports = mongoose.model('dogWalkers', DogWalkers);
