const React = require('react')
const r = React.createElement
const { Title } = require('./Title')
const { TaskInput } = require('./taskInput/TaskInput')
const { TaskListContainer } = require('../containers/TaskList')
const { TaskListFooter } = require('./taskListFooter/TaskListFooter')

const App = (props) => {
  const {tasks, filter, broadcast} = props
  return (
    r('div', {className: 'App'},
      Title(),
      r('div', { className: 'task-list-wrapper' },
        r(TaskInput, {}),
        r(TaskListContainer, { tasks, filter }),
        r(TaskListFooter, { tasks, filter, broadcast })
      )
    )
  )
}

module.exports = {
  App
}
