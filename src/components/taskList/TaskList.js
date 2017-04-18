const { createElement: r } = require('react')
const { TaskItem } = require('../taskItem/TaskItem')

const generateTaskItems = (visibleTasks) => {
  return visibleTasks.map(task => TaskItem({task, key: task.id}))
}

const TaskList = ({visibleTasks}) => {
  return r('div', { className: 'task-list flex-column' },
    generateTaskItems(visibleTasks)
  )
}

module.exports = {
  TaskList,
  generateTaskItems
}
