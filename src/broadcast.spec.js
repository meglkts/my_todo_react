const { broadcast } = require('./broadcast')
const { deepEqual } = require('assert')
const { getCurrentState, setNewState } = require('./state')
const { stateReducer } = require('./state_reducer')
const { coordinators } = require('./coordinators')

describe('broadcast.js', () => {
  describe('broadcast()', () => {
    it('should get current state, call coordinator for new state, and call renderApp with new state', () => {
      let calledWithArgs
      const renderApp = (newState) => {
        calledWithArgs = newState.test
      }
      const type = 'test'
      const payload = Math.random()

      broadcast(getCurrentState, setNewState, stateReducer, coordinators, renderApp, type, payload)

      deepEqual(calledWithArgs, payload)
    })
  })
})
