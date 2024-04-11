const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const workflowRoutes = require('./workflowRoutes')

router.use('/users', userRoutes)
router.use('/workflow', workflowRoutes)

module.exports = router
