const { createElement: r } = require('react')

const TaskText = ({text, status}) => {
  return r('div', { className: `task-item-text grow-1 pd-main ${status}`}, text)
}

module.exports = {
  TaskText
}
