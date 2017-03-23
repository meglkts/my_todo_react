const { App } = require('../components/App')
const { merge } = require('../models/utils')
require('../styles/app.css')
require('../styles/list.css')
require('../styles/item.css')

const { makeTask } = require('../models/TaskList')
const text = ['laundry', 'shopping', 'call mom', 'mow lawn', 'email friend']
const tasks = text.reduce((p, c) => {
  let t = makeTask(`id-${c}`, c, Date.now)
  p.push(t)
  return p
}, [])
const filter = 'All'
const activeCount = Object.keys(tasks).length

const state = {
  tasks,
  filter,
  activeCount
}

const AppContainer = (initialState) => {
  const currentState = merge(initialState, state)
  return (
    App(currentState)
  )
}

module.exports = {
  AppContainer
}
