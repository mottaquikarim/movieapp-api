const express = require('express')
const bodyParser = require('body-parser')

const {getGenresRouter, } = require('./routes/genres')
const {getMoviesRouter, } = require('./routes/movies')

const getApp = () => {
    const app = express();
    app.use(bodyParser.json())

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin' , "*");
        next();
    });

    app.use('/genres', getGenresRouter())
    app.use('/movies', getMoviesRouter())

    return app;
}

module.exports = {
    getApp,
}

