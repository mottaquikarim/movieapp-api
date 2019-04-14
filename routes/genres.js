const express = require('express');
const Genres = require('../services/genres');

const postGenre = (req, res) => {
    Genres.add(req.body.name)
        .then(data => {
            res.send(204)
        })
}

const getAllGenre = (req, res) => {
    Genres.getAll()
        .then(data => {
            res.json({success: true, data});
        })
}

const getGenre = (req, res) => {
    Genres.get(req.params.id)
        .then(data => {
            res.json({success: true, data});
        })
}

const putGenre = (req, res) => {
    Genres.put(req.params.id, req.body) 
        .then(data => Genres.get(req.params.id))
        .then(data => {
            res.json({success: true, data});
        })
}

const getGenresRouter = () => {
    const router = express.Router();

    router.post('/', postGenre)
    router.get('/', getAllGenre)
    router.get('/:id', getGenre)
    router.put('/:id', putGenre)

    return router;
}

module.exports = {
    getGenresRouter,
};
