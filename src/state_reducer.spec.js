const { stateReducer } = require('./state_reducer')
const { deepEqual } = require('assert')

describe('state_reducer.js', () => {
  describe('stateReducer()', () => {
    describe('stateReducer.setFilter()', () => {
      it('should return a new state with given filter', () => {
        const currentState = { foo: 'bar', filter: 'active' }
        const newState = stateReducer(currentState)['setFilter']('all')
        deepEqual(newState, { foo: 'bar', filter: 'all' })
      })
    })
    describe('stateReducer.setTasks()', () => {
      it('should return a new state with given tasks', () => {
        const currentState = { foo: 'bar', tasks: ['task1', 'task2'] }
        const newState = stateReducer(currentState)['setTasks'](['task1'])
        deepEqual(newState, { foo: 'bar', tasks: ['task1'] })
      })
    })
  })
})
