const { merge, clone } = require('./models/utils')
const { deleteCompleted } = require('./models/TaskList')

const stateReducer = (currentState) => ({
  setFilter: (filter) => {
    return merge(currentState, {filter})
  },
  updateTask: (task) => {
    const tasks = merge(currentState.tasks, { [task.id]: task })
    return merge(currentState, { tasks })
  },
  deleteCompletedTasks: () => {
    const tasks = deleteCompleted(clone(currentState.tasks))
    return merge(currentState, { tasks })
  },
  undefined: () => {
    return merge(currentState, {})
  },
  test: (payload) => {
    return merge(currentState, { test: payload })
  }
})

module.exports = {
  stateReducer
}
