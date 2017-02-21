const React = require('react')
const r = React.createElement
const { Title } = require('./Title')
const { TaskListWrapper } = require('./taskList/TaskListWrapper')

const { makeTask } = require('../models/TaskList')
const text = ['laundry', 'shopping', 'call mom', 'mow lawn', 'email friend']
const tasks = text.reduce((p, c) => {
  let t = makeTask(`id-${c}`)
  p[t.id] = t
  return p
}, {})

const App = React.createClass({
  render () {
    return (
      r('div', {className: 'App'},
        Title,
        TaskListWrapper({tasks})
      )
    )
  }
})

module.exports = {
  App
}
