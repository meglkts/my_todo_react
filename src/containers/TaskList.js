const { createElement: r } = require('react')
const { TaskList } = require('../components/taskList/TaskList')
const { filterTaskList } = require('../models/TaskList')

const TaskListContainer = ({ taskList, filter }) => {
  const visibleTasks = filterTaskList(filter, taskList)
  return r(TaskList, { visibleTasks })
}

module.exports = {
  TaskListContainer
}
