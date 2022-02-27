const fs = require("fs");

const getAllMovies = (req, res) => {
  const movies = require("../moviesList.json");
  res.send({ movies });
};
const getMovieById = (req, res) => {
  const movies = require("../moviesList.json");
  const myMovie = movies.find(
    (movieItem) => movieItem.id === parseInt(req.params.id)
  );
  if (myMovie) return res.send({ myMovie });
  res.status(404).send({ message: "movies not found" });
};
const addMovie = (req, res) => {
  const movie = JSON.stringify(req.body.movie);
  fs.appendFile("../moviesList.json", movie, (err) => {});
  res.send();
};
const updateMovie = (req, res) => {
  const movies = require("./moviesList.json");
  const movie = movies.find(
    (movieItem) => movieItem.id === parseInt(req.params.id)
  );
  movies[movies.indexOf(movie)] = req.body.movie;
  fs.writeFile("../moviesList.json", JSON.stringify(movie), () => {});
  res.send();
};
const deleteMovie = (rq, res) => {
  const movies = require("../moviesList.json");
  const movie = movies.find((movieItem) => movieItem.id != parseInt(req.params.id));
  fs.writeFile('../moviesList.json',JSON.stringify(movies.find((movieItem) => movieItem.id != parseInt(req.params.id)),()=>{})
  )}

module.exports =  {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
