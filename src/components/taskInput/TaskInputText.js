const { createElement: r } = require('react')

const TaskInputText = () => {
  return r('input', { className: `task-input-text`, placeholder: 'What needs to be done?'})
}

module.exports = {
  TaskInputText
}
