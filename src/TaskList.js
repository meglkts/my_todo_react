const { clone } = require('./utils')

const makeTask = (id, text, date) => {
  return {
    id,
    text,
    status: 'active',
    created: date,
    updated: date,
    cleared: false
  }
}

const toggleStatus = (task, updated) => {
  const updatedTask = clone(task)
  const toggle = {
    completed: 'active',
    active: 'completed'
  }
  updatedTask.status = toggle[task.status]
  updatedTask.updated = updated
  return updatedTask
}



module.exports = {
  makeTask,
  toggleStatus
}
