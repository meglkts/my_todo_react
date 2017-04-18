const React = require('react')
const r = React.createElement
const { Title } = require('./Title')
const { TaskListWrapper } = require('./TaskListWrapper')

const App = (props) => {
  const {tasks, filter, activeCount, broadcast} = props
  return (
    r('div', {className: 'App'},
      Title(),
      TaskListWrapper({tasks, filter, activeCount, broadcast})
    )
  )
}

module.exports = {
  App
}
