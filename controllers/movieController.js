// importiamo la connessione del DB
const connection = require('../data/db');

// funzione di index
function index(req, res) {
    console.log("rotta index");
    res.send("<h1>Rotta movies index </h1>")
    
}
// funzione di show
function show(req, res) {
    console.log("rotta show");
    res.send("<h1>Rotta movies id </h1>")
}

module.exports = { index, show }