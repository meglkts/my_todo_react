const { makeTask } = require('../models/TaskList')
const { v4: genId } = require('uuid')
const now = Date.now

const createTask = (stateReducer, text) => {
  const id = genId()
  const date = now()
  const task = makeTask(id, text, date)
  return stateReducer.updateTask(task)
}

module.exports = {
  createTask
}
