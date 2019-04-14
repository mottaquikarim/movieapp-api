const {dbAddr,} = require('../config')
const {getDbConn,} = require('../db')

const get = id => getDbConn(dbAddr).one(
    'SELECT * FROM ratings where ratings.id = $[id]',
    {id}
);

const getAll = _ => getDbConn(dbAddr).any(
    'SELECT * FROM ratings',
)

const add = ({stars, movie_id}) => getDbConn(dbAddr).none(
    'INSERT INTO ratings (stars, movie_id) VALUES ($[stars], $[movie_id])',
    {stars, movie_id}
);

const put = (id, data) => get(id)
    .then(rating => Object.assign({}, rating, data))
    .then(data => getDbConn(dbAddr).none(
        'UPDATE ratings SET stars = $[stars], movie_id = $[movie_id] WHERE id = $[id]',
        {stars: data.stars, movie_id: data.movie_id, id,},))

module.exports = {
    add,
    get,
    put,
    getAll,
}

