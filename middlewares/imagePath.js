function imagePath(req, res, next) {
    // creo nuova proprietà da aggiungere a req per path img
    req.imagePath = `${req.protocol}://${req.get('host')}/imgs/movies/`;
    // procedi con la risposta
    next();
}

module.exports = imagePath;