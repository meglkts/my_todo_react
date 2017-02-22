const { createElement: r } = require('react')

const StatusToggle = ({status}) => {
  return r('button', { className: `todo-btn status-toggle icon ${status}` })
}

module.exports = {
  StatusToggle
}
