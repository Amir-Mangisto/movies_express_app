const fs = require("fs");
const moviesRouter = require("express").Router();
const moviesCtrl = require("../controller/movies-controller");

moviesRouter.get("/", moviesCtrl.getAllMovies);

moviesRouter.get("/:id", moviesCtrl.getMovieById);

moviesRouter.post("/", moviesCtrl.addMovie);

moviesRouter.put("/:id", moviesCtrl.updateMovie);
moviesRouter.delete("/:id", moviesCtrl.deleteMovie);

module.exports = moviesRouter;
