const { createElement: r } = require('react')
const { TaskList } = require('../components/taskList/TaskList')
const { filterTaskList } = require('../models/TaskList')

const TaskListContainer = ({ taskList, filter, broadcast }) => {
  const visibleTasks = filterTaskList(filter, taskList)
  return r(TaskList, {
    visibleTasks,
    onStatusToggleClick: (task) => broadcast('toggleTaskStatus', task),
    onClearButtonClick: (taskId) => broadcast('deleteTask', taskId)
  })
}

module.exports = {
  TaskListContainer
}
