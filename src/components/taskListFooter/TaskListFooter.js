const { createElement: r } = require('react')
const { ActiveItemCount } = require('./ActiveItemCount')
const { StatusFilterButtons } = require('./StatusFilterButtons')
const { ClearCompletedButton } = require('./ClearCompletedButton')

const TaskListFooter = ({activeCount, filter}) => {
  return (
    r('div', { className: 'flex-row text-sub'},
      r(ActiveItemCount, { activeCount }),
      r(StatusFilterButtons, { filter }),
      r(ClearCompletedButton)
    )
  )
}

module.exports = {
  TaskListFooter
}
