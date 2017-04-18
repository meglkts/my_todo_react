import './styles/app.css';
import './styles/list.css';
import './styles/item.css';
const { merge } = require('./models/utils')
const { broadcast } = require('./broadcast')
const { getCurrentState, setNewState } = require('./state')
const { stateReducer } = require('./state_reducer')
const { coordinators } = require('./coordinators')
const { renderApp } = require('./app')

const taskListFactory = require('./models/task_list_factory')

let initialState = {
  filter: 'all',
  tasks: taskListFactory.tasks()
}

const broadcastApplied = (type, payload) => broadcast(getCurrentState, setNewState, stateReducer, coordinators, renderApp, type, payload)
const stateWithBroadcast = merge(initialState, {broadcast: broadcastApplied})

setNewState(stateWithBroadcast)
renderApp(stateWithBroadcast)
