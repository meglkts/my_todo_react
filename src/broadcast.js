const broadcast = (getCurrentState, setNewState, stateReducer, coordinators, renderApp, type, payload) => {
  const currentState = getCurrentState()
  const reducer = stateReducer(currentState)
  const newState = coordinators[type](reducer, payload)
  setNewState(newState)
  renderApp(newState)
}

module.exports = {
  broadcast
}
