
import express from 'express';
import FilmController from '../controllers/FilmController.js';
const router = express.Router();

// Define routes for the FilmController 
// router.get('/films', FilmController.getAll);
router
  .route('/films')
  .get(FilmController.getAllFilms);
router
  .route('/languages')
  .get(FilmController.getAllLanguages );


export default router;
