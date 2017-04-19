const { createElement: r } = require('react')
const { ActiveCountContainer } = require('../../containers/ActiveCount')
const { FilterContainer } = require('../../containers/Filter')
const { ClearCompletedButton } = require('./ClearCompletedButton')

const TaskListFooter = ({taskList, filter, broadcast}) => {
  return (
    r('div', { className: 'flex-row text-sub task-list-footer space-btwn'},
      r(ActiveCountContainer, { taskList }),
      r(FilterContainer, { filter, broadcast }),
      r(ClearCompletedButton)
    )
  )
}

module.exports = {
  TaskListFooter
}
