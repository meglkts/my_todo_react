const { createElement: r } = require('react')
const { Title } = require('./Title')
const { TaskInput } = require('./taskInput/TaskInput')
const { TaskListContainer } = require('../containers/TaskList')
const { TaskListFooter } = require('./taskListFooter/TaskListFooter')

const App = (props) => {
  const {taskList, filter, broadcast} = props
  return (
    r('div', {className: 'App'},
      Title(),
      r('div', { className: 'task-list-wrapper' },
        r(TaskInput, {}),
        r(TaskListContainer, { taskList, filter, broadcast }),
        r(TaskListFooter, { taskList, filter, broadcast })
      )
    )
  )
}

module.exports = {
  App
}
