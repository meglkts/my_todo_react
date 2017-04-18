let currentState = {
  filter: 'All',
  activeCount: 0,
  tasks: []
}

const setNewState = (newState) => {
  currentState = newState
}

const getCurrentState = () => {
  return currentState
}

module.exports = {
  getCurrentState,
  setNewState
}
