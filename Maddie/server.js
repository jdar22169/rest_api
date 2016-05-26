'use strict'
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const frenchieRouter = require('./lib/frenchieRouter.js')
const dogWalkerRouter = require('./lib/dogWalkerRouter.js')

mongoose.connect('mongodb://localhost/dev_db')


app.use('/frenchie', frenchieRouter)
app.use('/dogwalkers', dogWalkerRouter)
app.get('/*', (req,res) => {
  res.status(404).send('Not Found' + '\n')
})
app.listen(3000, () => console.log('listening on 3000'))
