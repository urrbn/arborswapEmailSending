require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser');
const AppliListing = require('./apis/ApplyListing')
const Subscription = require('./apis/Subscription')

// express app
const app = express()

// User cors
app.use(cors())

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() )

// public api routes
app.use('/api', AppliListing )
app.use('/api', Subscription )

// Start server
app.listen(process.env.PORT, ()=>{
    console.log('server started on port: ', process.env.PORT )
})