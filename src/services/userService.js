const db = require('../config/db')

const getUsers = () => {
  // Implement your logic to fetch users from the database here
  // Example query: db.query('SELECT * FROM users', (err, results) => { ... });
  return [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ]
}

module.exports = { getUsers }
