const { stateReducer } = require('./state_reducer')
const { deepEqual } = require('assert')
const { merge, clone } = require('./models/utils')

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

    describe('stateReducer.setAllTasksCompleted()', () => {
      it('should return a new state with all tasks set to complete', () => {
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
        const currentState = { foo: 'bar', tasks, completeAll: false }
        const newState = stateReducer(currentState).setAllTasksCompleted()
        const task1Completed = merge(task1, {status: 'completed'})
        const task4Completed = merge(task4, {status: 'completed'})
        const updatedTasks = {
          [task1.id]: task1Completed,
          [task2.id]: task2,
          [task3.id]: task3,
          [task4.id]: task4Completed
        }
        const expectedState = { foo: 'bar', tasks: updatedTasks, completeAll: true }
        deepEqual(newState, expectedState)
      })
    })

    describe('stateReducer.setAllTasksActive()', () => {
      it('should return a new state with all tasks set to active', () => {
        const task1 = { id: 'task-id-1', status: 'completed' }
        const task2 = { id: 'task-id-2', status: 'completed' }
        const task3 = { id: 'task-id-3', status: 'completed' }
        const task4 = { id: 'task-id-4', status: 'completed' }
        const tasks = {
          [task1.id]: task1,
          [task2.id]: task2,
          [task3.id]: task3,
          [task4.id]: task4
        }
        const currentState = { foo: 'bar', tasks, completeAll: true }
        const newState = stateReducer(currentState).setAllTasksActive()
        const updatedTasks = {
          [task1.id]: merge(task1, { status: 'active' }),
          [task2.id]: merge(task2, { status: 'active' }),
          [task3.id]: merge(task3, { status: 'active' }),
          [task4.id]: merge(task4, { status: 'active' })
        }
        const expectedState = { foo: 'bar', tasks: updatedTasks, completeAll: false }
        deepEqual(newState, expectedState)
      })
    })

    describe('stateReducer.deleteTask()', () => {
      it('should return a new state with given task deleted by id', () => {
        const task1 = { id: 'task-id-1' }
        const task2 = { id: 'task-id-2' }
        const task3 = { id: 'task-id-3' }
        const task4 = { id: 'task-id-4' }
        const tasks = {
          [task1.id]: task1,
          [task2.id]: task2,
          [task3.id]: task3,
          [task4.id]: task4
        }
        const currentState = { foo: 'bar', tasks }
        const newState = stateReducer(currentState).deleteTask('task-id-2')
        const updatedTasks = {
          [task1.id]: task1,
          [task3.id]: task3,
          [task4.id]: task4
        }
        const expectedState = { foo: 'bar', tasks: updatedTasks }
        deepEqual(newState, expectedState)
      })
    })
  })
})
