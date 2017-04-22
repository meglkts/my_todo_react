const { stateReducer } = require('./state_reducer')
const { deepEqual } = require('assert')
const { merge } = require('./models/utils')

describe('state_reducer.js', () => {
  describe('stateReducer()', () => {
    describe('stateReducer.setFilter()', () => {
      it('should return a new state with given filter', () => {
        const currentState = { foo: 'bar', filter: 'active' }
        const newState = stateReducer(currentState)['setFilter']('all')
        deepEqual(newState, { foo: 'bar', filter: 'all' })
      })
    })

    describe('stateReducer.updateTask()', () => {
      it('should return a new state with an updated task if taskId already exists', () => {
        const task1 = { id: 'task-id-1', status: 'active' }
        const task2 = { id: 'task-id-2', status: 'active' }
        const tasks = {
          [task1.id]: task1,
          [task2.id]: task2
        }
        const currentState = { foo: 'bar', tasks }
        const updatedTask1 = merge(task1, {status: 'completed'})
        const newState = stateReducer(currentState).updateTask(updatedTask1)
        const updatedTasks = merge(tasks, { [updatedTask1.id]: updatedTask1 })
        const expectedState = { foo: 'bar', tasks: updatedTasks }
        deepEqual(newState, expectedState)
      })

      it('should return a new state with a new task added if taskId not exists', () => {
        const task1 = { id: 'task-id-1', status: 'active' }
        const task2 = { id: 'task-id-2', status: 'active' }
        const tasks = {
          [task1.id]: task1,
          [task2.id]: task2
        }
        const currentState = { foo: 'bar', tasks }
        const updatedTask = { id: 'new-task-id', status: 'active' }
        const newState = stateReducer(currentState).updateTask(updatedTask)
        const updatedTasks = merge(tasks, {[updatedTask.id]: updatedTask})
        const expectedState = { foo: 'bar', tasks: updatedTasks }
        deepEqual(newState, expectedState)
      })
    })

    describe('stateReducer.deleteCompletedTasks()', () => {
      it('should return a new state with tasks equal to only remaining active tasks', () => {
        const task1 = { id: 'task-id-1', status: 'active' }
        const task2 = { id: 'task-id-2', status: 'completed' }
        const task3 = { id: 'task-id-3', status: 'completed' }
        const task4 = { id: 'task-id-4', status: 'active' }
        const tasks = {
          [task1.id]: task1,
          [task2.id]: task2,
          [task3.id]: task3,
          [task4.id]: task4
        }
        const currentState = { foo: 'bar', tasks }
        const newState = stateReducer(currentState).deleteCompletedTasks()
        const updatedTasks = {
          [task1.id]: task1,
          [task4.id]: task4
        }
        const expectedState = { foo: 'bar', tasks: updatedTasks }
        deepEqual(newState, expectedState)
      })
    })
  })
})
