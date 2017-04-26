const { createElement: r } = require('react')
const { Title } = require('./Title')
const { TaskInput } = require('./taskInput/TaskInput')
const { TaskListContainer } = require('../containers/TaskList')
const { TaskListFooter } = require('./taskListFooter/TaskListFooter')

const App = ({completeAll, taskList, filter, broadcast}) => {
  return (
    r('div', {className: 'App'},
      Title(),
      r('div', { className: 'task-list-wrapper' },
        r(TaskInput, { completeAll, broadcast }),
        r(TaskListContainer, { taskList, filter, broadcast }),
        r(TaskListFooter, { completeAll, taskList, filter, broadcast })
      )
    )
  )
}

module.exports = {
  App
}
