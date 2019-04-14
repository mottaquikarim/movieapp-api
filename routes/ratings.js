const express = require('express');
const Ratings = require('../services/ratings');

const postRating = (req, res) => {
    Ratings.add(req.body)
        .then(data => {
            res.send(204)
        })
}

const getAllRating = (req, res) => {
    Ratings.getAll()
        .then(data => {
            res.json({success: true, data});
        })
}

const getRating = (req, res) => {
    Ratings.get(req.params.id)
        .then(data => {
            res.json({success: true, data});
        })
}

const putRating = (req, res) => {
    Ratings.put(req.params.id, req.body) 
        .then(data => Ratings.get(req.params.id))
        .then(data => {
            res.json({success: true, data});
        })
}

const getRatingsRouter = () => {
    const router = express.Router();

    router.post('/', postRating)
    router.get('/', getAllRating)
    router.get('/:id', getRating)
    router.put('/:id', putRating)

    return router;
}

module.exports = {
    getRatingsRouter,
};
