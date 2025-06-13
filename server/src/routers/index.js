
import express from 'express';
import FilmController from '../controllers/FilmController.js';
const router = express.Router();

// Define routes for the FilmController 
router.get('/films', FilmController.getAllFilms);
router.get('/languages', FilmController.getAllLanguages);
router.get('/films/:filmId/actors', FilmController.getFilmActors);
router.get('/categories', FilmController.getAllCategories);
router.get('/film-categories', FilmController.getAllCategories);
router.get('/actors', FilmController.getAllActors);

export default router;
