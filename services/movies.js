const {dbAddr,} = require('../config')
const {getDbConn,} = require('../db')


const search = title => getDbConn(dbAddr).any(
    `
SELECT movies.id,
   movies.title,
   movies.image_url,
   (SELECT to_char(
           AVG (ratings.stars),
           '9D99'
        ) AS avg_rating
     FROM movies JOIN ratings on ratings.movie_id = movies.id),
   genres.id as genre_id,
   genres.name as genre_name
FROM movies
JOIN genres on genres.id = movies.genre_id
WHERE movies.title ILIKE '$1#%'
    `,
    title
);

const get = id => getDbConn(dbAddr).one(
    `
SELECT movies.id,
   movies.title,
   movies.image_url,
   (SELECT to_char(
           AVG (ratings.stars),
           '9D99'
        ) AS avg_rating
     FROM movies JOIN ratings on ratings.movie_id = movies.id WHERE movies.id = $[id]),
   genres.id as genre_id,
   genres.name as genre_name
FROM movies
JOIN genres on genres.id = movies.genre_id
WHERE movies.id = $[id]
    `,
    {id,}
)

const getAll = id => getDbConn(dbAddr).any(
    `
SELECT movies.id,
   movies.title,
   movies.image_url,
   (SELECT to_char(
           AVG (ratings.stars),
           '9D99'
        ) AS avg_rating
     FROM movies JOIN ratings on ratings.movie_id = movies.id),
   genres.id as genre_id,
   genres.name as genre_name
FROM movies
JOIN genres on genres.id = movies.genre_id
    `,
    {id,}
)

const _get = id => getDbConn(dbAddr).one(
    'SELECT * FROM movies where movies.id = $[id]',
    {id}
);
const _getAll = _ => getDbConn(dbAddr).any(
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
    search,
}

