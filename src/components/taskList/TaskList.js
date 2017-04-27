const { createElement: r } = require('react')
const { TaskItem } = require('../taskItem/TaskItem')

const generateTaskItems = (visibleTasks, onStatusToggleClick, onClearButtonClick) => {
  return visibleTasks.map(task => TaskItem({
    task,
    key: task.id,
    onStatusToggleClick: () => onStatusToggleClick(task),
    onClearButtonClick: () => onClearButtonClick(task.id)
  }))
}

const TaskList = ({visibleTasks, onStatusToggleClick, onClearButtonClick}) => {
  return r('div', { className: 'task-list flex-column' },
    generateTaskItems(visibleTasks, onStatusToggleClick, onClearButtonClick)
  )
}

module.exports = {
  TaskList,
  generateTaskItems
}
