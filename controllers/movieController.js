// importiamo la connessione del DB
const connection = require('../data/db');

// funzione di index
function index(req, res) {

    //query SQL 
    const sql = 'SELECT * FROM movies';

    //eseguo la query 
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);

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

        //seconda chiamata a DB per recuperare recensioni del film 
        connection.query(reviewSql, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ error: 'Database query failed' });

            //salvo la revirw in una costante
            const review = reviewResults;

            //aggiungo a oggetto movie la prop per le review
            movie.review = reviewResults;
            
            //ritorno il json del fillm
            res.json(movie); 
        })
    });
}



module.exports = { index, show }