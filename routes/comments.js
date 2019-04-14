const express = require('express');
const Comments = require('../services/comments');

const postComment = (req, res) => {
    Comments.add(req.body)
        .then(data => {
            res.send(204)
        })
}

const getAllComment = (req, res) => {
    Comments.getAll()
        .then(data => {
            res.json({success: true, data});
        })
}

const getComment = (req, res) => {
    Comments.get(req.params.id)
        .then(data => {
            res.json({success: true, data});
        })
}

const putComment = (req, res) => {
    Comments.put(req.params.id, req.body) 
        .then(data => Comments.get(req.params.id))
        .then(data => {
            res.json({success: true, data});
        })
}
const getCommentsRouter = () => {
    const router = express.Router();

    router.post('/', postComment)
    router.get('/', getAllComment)
    router.get('/:id', getComment)
    router.put('/:id', putComment)

    return router;
}

module.exports = {
    getCommentsRouter,
};
