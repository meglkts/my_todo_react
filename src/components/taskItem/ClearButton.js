const { createElement: r } = require('react')

const ClearButton = () => {
  return r('button', { className: `todo-btn clear-task`})
}

module.exports = {
  ClearButton
}
