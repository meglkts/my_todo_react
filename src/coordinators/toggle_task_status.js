const { toggleStatus } = require('../models/TaskList')

const toggleTaskStatus = (stateReducer, task) => {
  return stateReducer.updateTask(toggleStatus(task))
}

module.exports = {
  toggleTaskStatus
}
