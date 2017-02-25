const React = require('react')
const r = React.createElement
const { Title } = require('./Title')
const { TaskListWrapper } = require('./TaskListWrapper')

const App = ({tasks, filter, activeCount}) => {
  return (
    r('div', {className: 'App'},
      Title(),
      TaskListWrapper({tasks, filter, activeCount})
    )
  )
}

module.exports = {
  App
}
