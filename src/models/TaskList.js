const { clone, merge } = require('./utils')
const uuid = require('uuid')
const generateId = uuid.v4

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

const addTask = (now, list, text) => {
  const newestTask = makeTask(generateId(), text, now())
  const newList = merge(list, {[newestTask.id]: newestTask})
  return {
    newList,
    newestTask
  }
}

module.exports = {
  makeTask,
  toggleStatus,
  addTask
}
