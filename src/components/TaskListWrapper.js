const { createElement: r } = require('react')
const { TaskInput } = require('./taskInput/TaskInput')
const { TaskList } = require('./taskList/TaskList')
const { TaskListFooter } = require('./taskListFooter/TaskListFooter')

const TaskListWrapper = ({tasks, filter, activeCount}) => {
  return r('div', { className: 'task-list-wrapper' },
    r(TaskInput, {}),
    r(TaskList, {tasks}),
    r(TaskListFooter, {activeCount, filter})
  )
}

module.exports = {
  TaskListWrapper
}
