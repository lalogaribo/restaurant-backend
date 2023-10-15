const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'eduardo',
    password: 'test12345',
    database: 'restaurant'
})

db.connect(function (err) {
    if (err) throw err;
    console.log('Database connected')
})

module.exports = db;