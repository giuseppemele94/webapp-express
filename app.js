const express = require('express');
const app = express();
const port = process.env.PORT;

//import Router dei movies
const movieRouter = require('./routers/movieRouter'); 


// attivazione della cartella public per uso file statici
app.use(express.static('public'));

// rotta home APP
app.get('/api', (req, res) => {
    res.send("<h1>Rotta di home della nostra App di film </h1>")
})

app.use('/api/movies', movieRouter);

app.listen(port, () => {
    console.log(` listening on port ${port}`)
})
