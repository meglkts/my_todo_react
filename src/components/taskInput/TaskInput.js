const { createElement: r } = require('react')
const { SelectAllToggle } = require('./SelectAllToggle')
const { TaskInputText } = require('./TaskInputText')

const TaskInput = () => {
  return (
    r('div', { className: 'flex-row left-align-row-pad task-input'},
      r(SelectAllToggle, { selected: 'none'}),
      r(TaskInputText, {})
    )
  )
}

module.exports = {
  TaskInput
}
