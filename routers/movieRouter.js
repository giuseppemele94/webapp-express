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

//rotta di create 
router.post('/',movieController.store);

//rotta di modifica totale
router.put('/:id',movieController.update);

//rotta di modifica parziale
router.patch('/:id',movieController.modify);

//rotta di eliminazione
router.delete('/:id',movieController.destroy); 

module.exports = router;