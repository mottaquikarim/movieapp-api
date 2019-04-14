const express = require('express')
const bodyParser = require('body-parser')

const {getGenresRouter, } = require('./routes/genres')
const {getMoviesRouter, } = require('./routes/movies')
const {getRatingsRouter, } = require('./routes/ratings')
const {getCommentsRouter, } = require('./routes/comments')

const getApp = () => {
    const app = express();
    app.use(bodyParser.json())

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin' , "*");
        next();
    });

    app.use('/genres', getGenresRouter())
    app.use('/movies', getMoviesRouter())
    app.use('/ratings', getRatingsRouter())
    app.use('/comments', getCommentsRouter())

    return app;
}

module.exports = {
    getApp,
}

