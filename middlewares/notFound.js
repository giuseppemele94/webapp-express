function notFound(req, res, next) {
    // forziano il code di risposta corretto
    res.status(404)
    //  messaggio di risposta 
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    });
};

module.exports = notFound;