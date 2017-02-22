const { createElement: r } = require('react')

const ClearCompletedButton = () => {
  return r('button', { className: `clear-completed todo-btn` }, 'Clear completed')
}

module.exports = {
  ClearCompletedButton
}
