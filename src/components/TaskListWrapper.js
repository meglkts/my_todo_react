const { createElement: r } = require('react')

const TaskListWrapper = (tasks) => {
  return r('div', {},
    r(TaskInput, { className: 'TaskInput' }),
    r(TaskList, { className: 'TaskList', tasks }),
    r(TaskListFooter, { className: 'TaskListFooter' })
  )
}

module.exports = {
  TaskListWrapper
}
