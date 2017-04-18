const { filterTaskList } = require('./filter_task_list')

module.exports = {
  coordinators: {
    test: (stateReducer, payload) => stateReducer.test(payload),
    filterTaskList
  }
}
