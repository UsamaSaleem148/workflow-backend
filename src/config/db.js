const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
})

console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_PORT)
console.log(process.env.DB_DATABASE)

connection.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err)
  } else {
    console.log('MySQL connected!')
  }
})

module.exports = connection
