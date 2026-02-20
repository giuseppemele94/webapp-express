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
    const sql = 'SELECT * FROM movies WHERE id=? ';

    //eseguo la query
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0)
            return res.status(404).json({
                error: 'Post not found'
            });
        res.json(results);
    });
}

module.exports = { index, show }