const { createElement: r } = require('react')
const { SelectAllToggle } = require('./SelectAllToggle')
const { TaskInputText } = require('./TaskInputText')

const TaskInput = () => {
  return (
    r('div', { className: 'flex-row left-align-row-pad task-item', key},
      r(SelectAllToggle, {}),
      r(TaskInputText, {})
    )
  )
}

module.exports = {
  TaskInput
}
