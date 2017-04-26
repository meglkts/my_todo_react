const { createElement: r } = require('react')
const { App } = require('../components/App')
const { tasksToTaskList } = require('../models/TaskList')

const AppContainer = ({ completeAll, filter, tasks, broadcast }) => {
  const taskList = tasksToTaskList(tasks)
  return (
    r(App, { completeAll, filter, taskList, broadcast })
  )
}

module.exports = {
  AppContainer
}
