const { createElement: r } = require('react')
const { ActiveItemCount } = require('./ActiveItemCount')
const { StatusFilterButtons } = require('./StatusFilterButtons')
const { ClearCompletedButton } = require('./ClearCompletedButton')

const TaskListFooter = ({activeCount}) => {
  return (
    r('div', { className: 'flex-row text-sub space-btwn'},
      r(ActiveItemCount, { activeCount }),
      r(StatusFilterButtons),
      r(ClearCompletedButton)
    )
  )
}

module.exports = {
  TaskListFooter
}
