const { createElement: r } = require('react')
const { TaskList } = require('../components/taskList/TaskList')
const { filterTaskList } = require('../models/TaskList')

const TaskListContainer = ({ tasks, filter }) => {
  const visibleTasks = filterTaskList(filter, tasks)
  return r(TaskList, { visibleTasks })
}

module.exports = {
  TaskListContainer
}
