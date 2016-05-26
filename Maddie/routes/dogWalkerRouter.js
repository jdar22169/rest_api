'use strict';
const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const DogWalkers = require('./schema/dogWalkers.js')

const dogWalkerRouter = module.exports = express.Router()
