const express = require('express')
const router = express.Router()
const workflowController = require('../controllers/workflowController')

router.get('/getAll', workflowController.getWorkflows)
router.get('/condition/:id', workflowController.getConditionsByInitId)
router.get('/action/:id', workflowController.getActionsByInitId)
router.get('/:id', workflowController.getWorkflowById)
router.post('/create', workflowController.createWorkflow)
router.put('/update', workflowController.updateWorkflow)
router.delete('/delete', workflowController.deleteWorkflow)

module.exports = router
