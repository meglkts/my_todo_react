const { createElement: r } = require('react')
const { App } = require('../components/App')
const { tasksToTaskList } = require('../models/TaskList')

const AppContainer = ({ filter, tasks, broadcast }) => {
  const taskList = tasksToTaskList(tasks)
  return (
    r(App, { filter, taskList, broadcast })
  )
}

module.exports = {
  AppContainer
}
