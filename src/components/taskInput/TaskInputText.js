const { createElement: r } = require('react')

const TaskInputText = () => {
  return r('input', { className: `task-input-text grow-1 pd-sm`, placeholder: 'What needs to be done?'})
}

module.exports = {
  TaskInputText
}
