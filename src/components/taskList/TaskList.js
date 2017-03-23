const { createElement: r } = require('react')
const { TaskItem } = require('../taskItem/TaskItem')

const generateTaskItems = (tasks) => {
  return tasks.map(task => TaskItem({task, key: task.id}))
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
