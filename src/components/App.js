const React = require('react')
const r = React.createElement
const { Title } = require('./Title')
const { TaskListWrapper } = require('./taskList/TaskListWrapper')

const App = React.createClass({
  render () {
    return (
      r('div', {className: 'App'},
        r(Title),
        r(TaskListWrapper)
      )
    )
  }
})

module.exports = {
  App
}
