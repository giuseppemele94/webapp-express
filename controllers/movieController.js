// importiamo la connessione del DB
const connection = require('../data/db');

// funzione di index
function index(req, res) {

    //query SQL 
    const sql = 'SELECT * FROM movies';

    //eseguo la query 
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });


        // creo una copia dei risultati con modifica path imgs
        //ciclo con map tutto l'array result prendendo tutto ciò che è presente. 
        //dove è presente il tag image prendo la stringa creata in imagePath e gli aggiungo il tag presente in img
        const movies = results.map(movie => {
            return {
                ...movie,
                image: req.imagePath + movie.image
            }
        })

        res.json(movies);

    });
}
// funzione di show
function show(req, res) {

    //recupero id da parametro dinamico
    const id = parseInt(req.params.id);

    //query SQL 
    const movieSql = 'SELECT * FROM movies WHERE id=? ';

    const reviewSql = 'SELECT * FROM reviews WHERE movie_id = ? ';

    //eseguo la query per recuperare il film 
    connection.query(movieSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (movieResults.length === 0)
            return res.status(404).json({
                error: 'Post not found'
            });

        //salvo il risultato in una costante
        const movie = movieResults[0];
        // aggiungo path img dal middleware
        movie.image = req.imagePath + movie.image;

        //seconda chiamata a DB per recuperare recensioni del film 
        connection.query(reviewSql, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ error: 'Database query failed' });

            //salvo la revirw in una costante
            const reviewArr = reviewResults;

            //aggiungo a oggetto movie la prop per le review
            movie.reviews = reviewArr;
            
            //ritorno il json del fillm
            res.json(movie); 
        })
    });
}

//funzione di create della review 
function storeReview(req,res) {
    res.send("create new");
}

//funzione di modifica totale PUT
function update(req,res) {
    res.send("Modifa totale");
}

//funzione di modifica parziale 
function modify(req,res) {
    res.send("Modifica parizale");
}

//funzione di eliminazione
function destroy(req,res) {
    res.send("cancella");
} 

module.exports = { index, show, storeReview, update, modify, destroy }