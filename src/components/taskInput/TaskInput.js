const { createElement: r } = require('react')
const { SelectAllContainer } = require('../../containers/SelectAll')
const { TaskInputText } = require('./TaskInputText')

const TaskInput = ({ completeAll, broadcast }) => {
  return (
    r('div', { className: 'flex-row left-align-row-pad task-input'},
      r(SelectAllContainer, { completeAll, broadcast }),
      r(TaskInputText, { broadcast })
    )
  )
}

module.exports = {
  TaskInput
}
