const React = require('react')
const r = React.createElement
const { Title } = require('./Title')
const { TaskListWrapper } = require('./TaskListWrapper')

const { makeTask } = require('../models/TaskList')
const text = ['laundry', 'shopping', 'call mom', 'mow lawn', 'email friend']
const tasks = text.reduce((p, c) => {
  let t = makeTask(`id-${c}`, c, Date.now)
  p.push(t)
  return p
}, [])
const filter = 'All'
const activeCount = Object.keys(tasks).length

const App = () => {
  return (
    r('div', {className: 'App'},
      Title,
      TaskListWrapper({tasks, filter, activeCount})
    )
  )
}

module.exports = {
  App
}
