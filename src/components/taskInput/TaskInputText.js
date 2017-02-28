const { createElement: r } = require('react')

const TaskInputText = () => {
  return r('input', { className: `task-input-text grow-1 pd-main text-main`, placeholder: 'What needs to be done?'})
}

module.exports = {
  TaskInputText
}
