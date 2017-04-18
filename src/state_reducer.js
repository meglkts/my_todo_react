const { merge } = require('./models/utils')

const stateReducer = (currentState) => ({
  setFilter: (filter) => {
    return merge(currentState, {filter})
  },
  setTasks: (tasks) => {
    return merge(currentState, {tasks})
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
