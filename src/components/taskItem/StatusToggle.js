const { createElement: r } = require('react')

const StatusToggle = ({status, onStatusToggleClick}) => {
  return r('button', {
    className: `todo-btn status-toggle icon ${status}`,
    onClick: onStatusToggleClick
  })
}

module.exports = {
  StatusToggle
}
