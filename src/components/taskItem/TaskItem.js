const { createElement: r } = require('react')
const { StatusToggle } = require('./StatusToggle')
const { TaskText } = require('./TaskText')
const { ClearButton } = require('./ClearButton')

const TaskItem = ({task, key}) => {
  return (
    r('div', { className: 'flex-row left-align-row-pad task-item text-main', key},
      r(StatusToggle, { status: task.status }),
      r(TaskText, { text: task.text, status: task.status }),
      r(ClearButton)
    )
  )
}

module.exports = {
  TaskItem
}
