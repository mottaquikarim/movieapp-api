const express = require('express');
const Movies = require('../services/movies');

const postMovie = (req, res) => {
    Movies.add(req.body)
        .then(data => {
            res.send(204)
        })
}

const getAllMovie = (req, res) => {
    Movies.getAll()
        .then(data => {
            res.json({success: true, data});
        })
}

const getMovie = (req, res) => {
    Movies.get(req.params.id)
        .then(data => {
            res.json({success: true, data});
        })
}

const putMovie = (req, res) => {
    Movies.put(req.params.id, req.body) 
        .then(data => Movies.get(req.params.id))
        .then(data => {
            res.json({success: true, data});
        })
}

const getMoviesRouter = () => {
    const router = express.Router();

    router.post('/', postMovie)
    router.get('/', getAllMovie)
    router.get('/:id', getMovie)
    router.put('/:id', putMovie)

    return router;
}

module.exports = {
    getMoviesRouter,
};
