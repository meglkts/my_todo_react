const { createElement: r } = require('react')
const { ActiveItemCount } = require('./ActiveItemCount')
const { StatusFilterButtons } = require('./StatusFilterButtons')
const { ClearCompletedButton } = require('./ClearCompletedButton')

const TaskListFooter = ({activeCount, filter, broadcast}) => {
  return (
    r('div', { className: 'flex-row text-sub task-list-footer space-btwn'},
      r(ActiveItemCount, { activeCount }),
      r(StatusFilterButtons, { filter, broadcast }),
      r(ClearCompletedButton)
    )
  )
}

module.exports = {
  TaskListFooter
}
