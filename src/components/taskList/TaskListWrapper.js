const { createElement: r } = require('react')
const { TaskInput } = require('./TaskInput')
const { TaskList } = require('./TaskList')
const { TaskListFooter } = require('./TaskListFooter')

const TaskListWrapper = (tasks) => {
  return r('div', { className: 'task-list-wrapper' },
    r(TaskInput, {}),
    r(TaskList, {}),
    r(TaskListFooter, {})
  )
}

module.exports = {
  TaskListWrapper
}
