const { createElement: r } = require('react')

const ClearCompletedButton = ({broadcast}) => {
  return r('button', {
      className: `clear-completed todo-btn pd-sub`,
      onClick: () => broadcast('clearCompleted')
    },
    'Clear completed')
}

module.exports = {
  ClearCompletedButton
}
