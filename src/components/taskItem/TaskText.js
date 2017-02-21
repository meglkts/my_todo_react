const { createElement: r } = require('react')

const TaskText = ({text, status}) => {
  return r('div', { className: `task-item-text grow-1 pd-sm ${status}`}, text)
}

module.exports = {
  TaskText
}
