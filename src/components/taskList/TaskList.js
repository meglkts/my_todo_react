const { createElement: r } = require('react')
const { TaskItem } = require('../taskItem/TaskItem')

const TaskList = ({tasks}) => {
  return r('div', { className: 'task-list flex-column' },
    generateTaskItems(tasks)
  )
}

const generateTaskItems = (tasks) => {
  const taskList = Object.keys(tasks)
  return taskList.map(k => TaskItem({task: tasks[k], key: k}))
}

module.exports = {
  TaskList,
  generateTaskItems
}
