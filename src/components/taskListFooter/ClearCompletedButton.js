const { createElement: r } = require('react')

const ClearCompletedButton = () => {
  return r('button', { className: `clear-completed todo-btn pd-sub` }, 'Clear completed')
}

module.exports = {
  ClearCompletedButton
}
