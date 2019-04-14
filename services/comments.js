const {dbAddr,} = require('../config')
const {getDbConn,} = require('../db')

const get = id => getDbConn(dbAddr).one(
    'SELECT * FROM comments where comments.id = $[id]',
    {id}
);

const getAll = _ => getDbConn(dbAddr).any(
    'SELECT * FROM comments',
)

const add = ({text, movie_id}) => getDbConn(dbAddr).none(
    'INSERT INTO comments (text, movie_id) VALUES ($[text], $[movie_id])',
    {text, movie_id}
);

const put = (id, data) => get(id)
    .then(comment => Object.assign({}, comment, data))
    .then(data => getDbConn(dbAddr).none(
        'UPDATE comments SET text = $[text], movie_id = $[movie_id] WHERE id = $[id]',
        {text: data.text, movie_id: data.movie_id, id,},))

module.exports = {
    add,
    get,
    put,
    getAll,
}

