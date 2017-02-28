const { createElement: r } = require('react')

const ClearButton = () => {
  return r('button', { className: `todo-btn clear-task icon text-sub`}, '\u2573')
}

module.exports = {
  ClearButton
}
