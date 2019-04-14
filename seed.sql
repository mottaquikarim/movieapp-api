DROP DATABASE if exists movieapp;
CREATE DATABASE movieapp;

\c movieapp 

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    genre_id INT REFERENCES genres(id), 
    image_url VARCHAR NOT NULL
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    stars INTEGER NOT NULL,
    CHECK (stars BETWEEN 1 AND 5),
    movie_id INT REFERENCES movies(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    text VARCHAR,
    movie_id INT REFERENCES movies(id)
);

INSERT INTO genres (name) VALUES ('action');
INSERT INTO genres (name) VALUES ('horror');
INSERT INTO genres (name) VALUES ('drama');
INSERT INTO genres (name) VALUES ('comedy');
INSERT INTO genres (name) VALUES ('fantasy');

-- ACTION MOVIES
INSERT INTO movies (title, genre_id, image_url)
VALUES
('Black Panther', 1, 'https://resizing.flixster.com/FP3qKOS-OS97xwjP5T5GKf3t86I=/fit-in/200x296.2962962962963/v1.bTsxMjU1NzcyNTtqOzE4MDU1OzEyMDA7MTY4ODsyNTAw');
INSERT INTO movies (title, genre_id, image_url)
VALUES
('Wonder Woman', 1, 'https://resizing.flixster.com/fervJNqXnm-oSTtCPGYLz6ooHpE=/fit-in/200x296.2962962962963/v1.bTsxMjUzMzQxOTtqOzE4MDU1OzEyMDA7MjAyNTsyOTI1');

-- HORROR MOVIES
INSERT INTO movies (title, genre_id, image_url)
VALUES
('Psycho', 2, 'https://resizing.flixster.com/ElNvGbPHwXVPxgbjZG9l-09yXGA=/206x305/v1.bTsxMTE3Nzc5NztqOzE4MDg0OzEyMDA7ODAwOzEyMDA');
INSERT INTO movies (title, genre_id, image_url)
VALUES
('Get Out', 2, 'https://resizing.flixster.com/_UiexNbzkf80kZE1khuTk81fpb0=/fit-in/200x296.2962962962963/v1.bTsxMjMyMjQzNDtqOzE4MDUyOzEyMDA7NTk3Ozk0Ng');

-- DRAMA
INSERT INTO movies (title, genre_id, image_url)
VALUES
('Gone with the Wind', 3, 'https://resizing.flixster.com/hDtg0MkQm8--WZNPBLyXeIO60no=/206x305/v1.bTsxMTE2ODA5MjtqOzE4MDg0OzEyMDA7ODAwOzEyMDA');
INSERT INTO movies (title, genre_id, image_url)
VALUES
('Chinatown', 3, 'https://resizing.flixster.com/MrTudWv1SotFWQwHj6vS6-FkD2Y=/206x305/v1.bTsxMjk2MjE5NjtqOzE4MDYwOzEyMDA7MjAwMDszMDAw');

-- COMEDY
INSERT INTO movies (title, genre_id, image_url)
VALUES
('Singin'' in the Rain', 4, 'https://resizing.flixster.com/65MAw23pU--wFsw8dQafxbjagU8=/fit-in/200x296.2962962962963/v1.bTsxMjI5MjMyODtqOzE4MDUyOzEyMDA7NTk2Ozk2MA');
INSERT INTO movies (title, genre_id, image_url)
VALUES
('Zootopia', 4, 'https://resizing.flixster.com/dNI5seB9gF6sQJz4j6J5At9MGGY=/fit-in/200x296.2962962962963/v1.bTsxMTMxODA2ODtwOzE4MDg1OzEyMDA7NDk5Ozc0MQ');

-- FANTASY
INSERT INTO movies (title, genre_id, image_url)
VALUES
('Wizard of Oz', 5, 'https://resizing.flixster.com/fSKPnxYHwPdkL3Nx93jpon1OYzo=/fit-in/200x296.2962962962963/v1.bTsxMTE2ODA4NjtqOzE4MDg0OzEyMDA7ODAwOzEyMDA');
INSERT INTO movies (title, genre_id, image_url)
VALUES
('Pan''s Labyrinth', 5, 'https://resizing.flixster.com/wjQZEmIxthJeLmAK5HPUo8sZyhg=/fit-in/200x296.2962962962963/v1.bTsxMTI5NjMwNztqOzE4MDg1OzEyMDA7MTUzNjsyMDQ4');

INSERT INTO ratings(stars, movie_id) VALUES ('4', 1);
INSERT INTO ratings(stars, movie_id) VALUES ('2', 1);

INSERT INTO ratings(stars, movie_id) VALUES ('4', 2);
INSERT INTO ratings(stars, movie_id) VALUES ('2', 2);

INSERT INTO ratings(stars, movie_id) VALUES ('4', 3);
INSERT INTO ratings(stars, movie_id) VALUES ('2', 3);

INSERT INTO ratings(stars, movie_id) VALUES ('4', 4);
INSERT INTO ratings(stars, movie_id) VALUES ('2', 4);

INSERT INTO ratings(stars, movie_id) VALUES ('4', 5);
INSERT INTO ratings(stars, movie_id) VALUES ('2', 5);

INSERT INTO ratings(stars, movie_id) VALUES ('4', 6);
INSERT INTO ratings(stars, movie_id) VALUES ('2', 6);

INSERT INTO ratings(stars, movie_id) VALUES ('4', 7);
INSERT INTO ratings(stars, movie_id) VALUES ('2', 7);

INSERT INTO ratings(stars, movie_id) VALUES ('4', 8);
INSERT INTO ratings(stars, movie_id) VALUES ('2', 8);

INSERT INTO ratings(stars, movie_id) VALUES ('4', 9);
INSERT INTO ratings(stars, movie_id) VALUES ('2', 9);

INSERT INTO ratings(stars, movie_id) VALUES ('4', 10);
INSERT INTO ratings(stars, movie_id) VALUES ('2', 10);

INSERT INTO comments(text, movie_id) VALUES ('lol', 1)
