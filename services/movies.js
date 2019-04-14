const {dbAddr,} = require('../config')
const {getDbConn,} = require('../db')

const get = id => getDbConn(dbAddr).one(
    'SELECT * FROM movies where movies.id = $[id]',
    {id}
);
const getAll = _ => getDbConn(dbAddr).any(
    'SELECT * FROM movies',
);
const add = ({title, genre_id, image_url}) => getDbConn(dbAddr).none(
    'INSERT INTO movies (title, genre_id, image_url) VALUES ($[title], $[genre_id], $[image_url])',
    {title, genre_id, image_url}
);
const put = (id, data) => get(id)
    .then(genre => Object.assign({}, genre, data))
    .then(data => getDbConn(dbAddr).none(
        'UPDATE movies SET title = $[title], genre_id = $[genre_id], image_url = $[url] WHERE id = $[id]',
        {id, title: data.title, genre_id: data.genre_id, url: data.image_url},))

module.exports = {
    add,
    get,
    put,
    getAll,
}

