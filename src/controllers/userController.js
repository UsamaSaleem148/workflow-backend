const userService = require('../services/userService')

const getUser = (req, res) => {
  console.log('Here')
  const users = userService.getUsers()
  res.json(users)
}

module.exports = { getUser }
