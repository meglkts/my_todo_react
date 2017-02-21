const { createElement: r } = require('react')

const SelectAllToggle = ({selected}) => {
  return r('button', { className: `todo-btn status-toggle ${selected}` })
}

module.exports = {
  SelectAllToggle
}
