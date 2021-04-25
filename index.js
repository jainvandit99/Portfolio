const next = require('next')
const mongoose = require('mongoose')
const express = require('express')
var bodyParser = require('body-parser')
require('dotenv').config({path: `./.env.${process.env.ENV}`})

const routes = {
    projects: require('./routes/projects'),
    quotes: require('./routes/quotes')
}

process.on('uncaughtException', function (err){
    console.error('Uncaught Exception: ', err)
})

process.on('unhandledRejection', function(reason, p){
    console.error('Unhandled Rejection: Promise:', p, 'Reason: ', reason)
})

process.env.ENV = process.env.ENV || 'prod'
process.env.PORT = process.env.PORT || 8080

const databaseURL = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio'

mongoose.connect(
    databaseURL,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    function(err){
        if (err) {
            console.log('Connection to Mongo DB failed')
        }
    }
)

var db = mongoose.connection
db.on('error', console.error.bind(console,'Mongo connection error: '))
db.once('open', () => {
    console.log("ENV: " + process.env.ENV)
    console.log("URL: " + databaseURL)
    console.log('Connection to MongoDB successful')
})

//Initialising Next.js
const nextApp = next({
    dir: '.',
    dev: process.env.ENV === 'dev',
    prod: process.env.ENV === 'prod'
})

//Preparing Next with express
nextApp.prepare().then(() => {

    const app = express()
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    // parse application/json
    app.use(bodyParser.json({ limit: '50mb', extended: true }))
    routes.projects(app)
    routes.quotes(app)

    // Default catch-all handler to allow Next.js to handle all other routes
    app.all('*', (req, res) => {
        let nextRequestHandler = nextApp.getRequestHandler()
        return nextRequestHandler(req, res)
    })

    app.listen(process.env.PORT, err => {
        if (err) {
            throw err
        }
        console.log('> Ready on http://localhost:' + process.env.PORT + ' [' + process.env.ENV + ']')
    })
}).catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
})

