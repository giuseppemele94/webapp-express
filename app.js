const express = require('express');
const app = express();
const port = process.env.PORT;

//importo il middleware cors
const cors = require("cors");

//middleware cors 
app.use(cors({
    origin: 'http://localhost:5173'
}));

//import Router dei movies
const movieRouter = require('./routers/movieRouter'); 

//import del middleware gestione errore interno
const errorsHandler = require("./middlewares/errorsHandler");

//import del middleware gestione rotta inesistente
const notFound = require("./middlewares/notFound");

// import del middelware di gestione di path imgs
const imagePathMiddleware = require("./middlewares/imagePath");

// attivazioone middelware di gestione di path imgs
app.use(imagePathMiddleware);

// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// rotta home APP
app.get('/api', (req, res) => {
    res.send("<h1>Rotta di home della nostra App di film </h1>")
})

app.use('/api/movies', movieRouter);

//registrazione middleware errore 500ù
app.use(errorsHandler);

//registrazione middleware notFOund 404
app.use(notFound); 

app.listen(port, () => {
    console.log(` listening on port ${port}`)
})
