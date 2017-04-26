const { merge, clone } = require('./models/utils')
const { deleteCompleted, toggleAllTasksCompleted, toggleAllTasksActive } = require('./models/TaskList')

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
  setAllTasksCompleted: () => {
    const tasks = toggleAllTasksCompleted(clone(currentState.tasks))
    const completeAll = true
    return merge(currentState, { tasks, completeAll })
  },
  setAllTasksActive: () => {
    const tasks = toggleAllTasksActive(clone(currentState.tasks))
    const completeAll = false
    return merge(currentState, { tasks, completeAll })
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
