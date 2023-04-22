CREATE DATABASE movieList;

USE movieList;

CREATE TABLE IF NOT EXISTS movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL UNIQUE,
  watched TEXT NOT NULL,
  release_year TEXT,
  runtime TEXT,
  metascore TEXT,
  imbdRating TEXT
);