const { createElement: r } = require('react')
const { TaskItem } = require('../taskItem/TaskItem')

const generateTaskItems = (tasks) => {
  const taskList = Object.keys(tasks)
  return taskList.map(k => TaskItem({task: tasks[k], key: k}))
}

const TaskList = ({tasks}) => {
  return r('div', { className: 'task-list flex-column' },
    generateTaskItems(tasks)
  )
}

module.exports = {
  TaskList,
  generateTaskItems
}
