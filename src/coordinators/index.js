const { filterTaskList } = require('./filter_task_list')
const { toggleTaskStatus } = require('./toggle_task_status')

module.exports = {
  coordinators: {
    test: (stateReducer, payload) => stateReducer.test(payload),
    filterTaskList,
    toggleTaskStatus
  }
}
