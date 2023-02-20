const mysql = require('mysql2')

const db = mysql.createConnection({
    host: '34.126.223.53',
    user: 'rattin',
    database: 'ratherdb',
    password:'dftba4321',
    multipleStatements: true
})

db.connect((err) => {
    if(err){
      throw err
    }
    console.log('mysql connected')
})

module.exports = db;

