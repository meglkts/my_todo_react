const { createElement: r } = require('react')

const SelectAllToggle = ({selected}) => {
  return r('button', { className: `todo-btn select-all-toggle icon ${selected}` })
}

module.exports = {
  SelectAllToggle
}
