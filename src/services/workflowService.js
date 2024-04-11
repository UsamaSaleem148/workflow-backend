const db = require('../config/db')

const getWorkflows = () => {
  const sql = 'SELECT * FROM workflow where type = ?'
  const type = ['init']

  return db
    .promise()
    .query(sql, type)
    .then(([rows]) => {
      if (rows.length === 0) {
        return null
      }
      return rows
    })
    .catch((err) => {
      throw err
    })
}

const getSingleWorkflowById = (workflowId) => {
  const sql = 'SELECT * FROM workflow WHERE id = ?'
  const values = [workflowId]

  return db
    .promise()
    .query(sql, values)
    .then(([rows]) => {
      if (rows.length === 0) {
        return null
      }
      return rows[0]
    })
    .catch((err) => {
      throw err
    })
}

const getWorkflowById = (workflowId) => {
  const sql = 'SELECT * FROM workflow WHERE id = ? or init_id = ?'
  const values = [workflowId, workflowId]

  return db
    .promise()
    .query(sql, values)
    .then(([rows]) => {
      if (rows.length === 0) {
        return null
      }
      return rows
    })
    .catch((err) => {
      throw err
    })
}

const getConditionsByInitId = (workflowId) => {
  const sql = 'SELECT * FROM workflow WHERE init_id = ? and type = ?'
  const values = [workflowId, 'condition']

  return db
    .promise()
    .query(sql, values)
    .then(([rows]) => {
      if (rows.length === 0) {
        return null
      }
      return rows
    })
    .catch((err) => {
      throw err
    })
}

const getActionsByInitId = (workflowId) => {
  const sql = 'SELECT * FROM workflow WHERE init_id = ? and type = ?'
  const values = [workflowId, 'action']

  return db
    .promise()
    .query(sql, values)
    .then(([rows]) => {
      if (rows.length === 0) {
        return null
      }
      return rows
    })
    .catch((err) => {
      throw err
    })
}

const insertWorkflow = async (workflow) => {
  const sql = 'INSERT INTO workflow (name, type, level, parent_id, init_id) VALUES (?, ?, ?, ?, ?)'
  const values = [workflow.name, workflow.type, workflow.level, workflow.parent_id, workflow.initWorkflowId]
  let parentData = null
  if (workflow.parent_id !== null) {
    parentData = await getSingleWorkflowById(workflow.parent_id)
    if (parentData === null) {
      throw new Error('Record not found')
    }
  }

  return db
    .promise()
    .query(sql, values)
    .then(([result]) => {
      const insertId = result.insertId
      updateParentWithChildId(parentData, insertId)
      return result
    })
    .catch((err) => {
      throw err
    })
}

const updateParentWithChildId = (record, childId) => {
  if (record !== null) {
    if (!record.child_id || record.child_id === null) {
      let childIds = [childId]
      record.child_id = JSON.stringify(childIds)
    } else {
      let prevChildIds = JSON.parse(record.child_id)
      prevChildIds.push(childId)
      record.child_id = JSON.stringify(prevChildIds)
    }
    const sql = 'UPDATE workflow SET child_id = ? WHERE id = ?'
    console.log(record)
    const values = [record.child_id, record.id]
    console.log(values)
    return db
      .promise()
      .query(sql, values)
      .then(() => {
        return 'Record updated'
      })
      .catch((err) => {
        throw err
      })
  }
}

const updateWorkflow = (workflow) => {
  if (!checkIfWorkflowExists(workflow.id)) {
    throw new Error('Record not found')
  }
  const sql = 'UPDATE workflow SET name = ? WHERE id = ?'
  const values = [workflow.name, workflow.id]

  return db
    .promise()
    .query(sql, values)
    .then(() => {
      return 'Record updated'
    })
    .catch((err) => {
      throw err
    })
}

const deleteWorkflow = (workflow) => {
  if (!checkIfWorkflowExists(workflow.workflowId)) {
    throw new Error('Record not found')
  }
  const sql = 'DELETE FROM workflow WHERE id = ?'
  const values = [workflow.workflowId]

  return db
    .promise()
    .query(sql, values)
    .then(() => {
      return 'Record deleted'
    })
    .catch((err) => {
      throw err
    })
}

const checkIfWorkflowExists = (workflowId) => {
  const workflowData = getSingleWorkflowById(workflowId)
  if (workflowData === null) {
    throw new Error('Record not found')
  } else {
    return true
  }
}

module.exports = { insertWorkflow, updateWorkflow, deleteWorkflow, getWorkflows, getWorkflowById, getConditionsByInitId, getActionsByInitId }
