const { createElement: r } = require('react')
const { TaskItem } = require('../taskItem/TaskItem')

const generateTaskItems = (visibleTasks, onStatusToggleClick) => {
  return visibleTasks.map(task => TaskItem({
    task,
    key: task.id,
    onStatusToggleClick: () => onStatusToggleClick(task)
  }))
}

const TaskList = ({visibleTasks, onStatusToggleClick}) => {
  return r('div', { className: 'task-list flex-column' },
    generateTaskItems(visibleTasks, onStatusToggleClick)
  )
}

module.exports = {
  TaskList,
  generateTaskItems
}
