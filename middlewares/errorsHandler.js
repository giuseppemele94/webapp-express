function errorsHandler(err, req, res, next) {
    // forzo lo stato per convenzione al codice che da errore interno del server
    res.status(500)
    
    res.json({
        error: err.message,
    });
};

module.exports = errorsHandler;