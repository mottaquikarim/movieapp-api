const {dbAddr,} = require('../config')
const {getDbConn,} = require('../db')

const getMovies = id => getDbConn(dbAddr).any(
    `
SELECT movies.id, 
    movies.title, 
    movies.image_url
FROM movies 
JOIN genres on genres.id = movies.genre_id
WHERE genres.id = $[id]
    `,
    {id}
);

const get = id => getDbConn(dbAddr).one(
    'SELECT * FROM genres where genres.id = $[id]',
    {id}
);

const getAll = _ => getDbConn(dbAddr).any(
    'SELECT * FROM genres',
)

const add = genre => getDbConn(dbAddr).none(
    'INSERT INTO genres (name) VALUES ($[genre])',
    {genre}
);

const put = (id, data) => get(id)
    .then(genre => Object.assign({}, genre, data))
    .then(data => getDbConn(dbAddr).none(
        'UPDATE genres SET name = $[name] WHERE id = $[id]',
        {name: data.name, id,},))

module.exports = {
    add,
    get,
    put,
    getAll,
    getMovies,
}

