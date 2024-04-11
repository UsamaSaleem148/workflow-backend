const workflowService = require('../services/workflowService')

const getWorkflowById = async (req, res) => {
  try {
    const id = req.params.id
    const result = await workflowService.getWorkflowById(id)
    res.json({ workflow: result })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Error: ' + error.message })
  }
}

const getConditionsByInitId = async (req, res) => {
  try {
    const id = req.params.id
    const result = await workflowService.getConditionsByInitId(id)
    res.json({ workflow: result })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Error: ' + error.message })
  }
}

const getActionsByInitId = async (req, res) => {
  try {
    const id = req.params.id
    const result = await workflowService.getActionsByInitId(id)
    res.json({ workflow: result })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Error: ' + error.message })
  }
}

const getWorkflows = async (req, res) => {
  try {
    const result = await workflowService.getWorkflows()
    res.json(result)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Error: ' + error.message })
  }
}

const createWorkflow = async (req, res) => {
  try {
    const workflow = req.body
    const result = await workflowService.insertWorkflow(workflow)
    res.json({ message: 'Record inserted successfully', id: result.insertId })
  } catch (error) {
    console.error('Error creating workflow:', error)
    res.status(500).json({ message: 'Error creating workflow: ' + error.message })
  }
}

const updateWorkflow = async (req, res) => {
  try {
    const workflow = req.body
    await workflowService.updateWorkflow(workflow)
    res.json({ message: 'Workflow updated successfully' })
  } catch (error) {
    console.error('Error updating workflow:', error)
    res.status(500).json({ message: 'Error updating workflow: ' + error.message })
  }
}

const deleteWorkflow = async (req, res) => {
  try {
    const workflow = req.body
    await workflowService.deleteWorkflow(workflow)
    res.json({ message: 'Workflow deleted successfully' })
  } catch (error) {
    console.error('Error deleting workflow:', error)
    res.status(500).json({ message: 'Error deleting workflow: ' + error.message })
  }
}

module.exports = { createWorkflow, updateWorkflow, deleteWorkflow, getWorkflowById, getWorkflows, getConditionsByInitId, getActionsByInitId }
