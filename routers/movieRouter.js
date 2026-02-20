// importiamo parte di express
const express = require('express');
// utilizziamo parte di express per gestire le rotte
const router = express.Router();

// importiamo relativo controller
const movieController = require('../controllers/movieController');

//definiamo le fotte 

//rotta di index
router.get('/',movieController.index);

//rotta di show
router.get('/:id',movieController.show);

module.exports = router;