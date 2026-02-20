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
    console.log("rotta show");
    res.send("<h1>Rotta movies id </h1>")
}

module.exports = { index, show }