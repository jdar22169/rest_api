'use strict'

const express = require('express')
const bodyParser = require('body-parser').json
const Frenchie = require('../schema/frenchies.js')
const Dogwalkers = require('../schema/dogWalkers.js')

const mixedRouter = module.exports = express.Router()

mixedRouter.get('/', (req,res) => {
  let dogWalkers_bitten = [];
  let dogs_died = [];
   Frenchie.find({dogWalkers_bitten: {$exists: true}}, (err,frenchie) => {
    if(err) return next(err);
    dogWalkers_bitten.push(frenchie)
  })
 Dogwalkers.find({dogs_died: {$exists:true}}, (err,dogwalkers) => {
    if(err) return next(err)
    dogs_died.push(dogwalkers)
  })
  console.log(dogWalkers_bitten)
  console.log(dogs_died)

})
