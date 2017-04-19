const { toggleTaskStatus } = require('./toggle_task_status')
const { makeTask, toggleStatus } = require('../models/TaskList')
const { merge } = require('../models/utils')
const { deepEqual } = require('assert')
const { stateReducer } = require('../state_reducer')

 describe('toggleTaskStatus.js', () => {
   describe('toggleTaskStatus()', () => {
     it('should coordinate all state changes for changing task status', () => {
       const task1 = makeTask('task-id-1', 'laundry', Date.now())
       const task2 = makeTask('task-id-2', 'groceries', Date.now())
       const task2Completed = toggleStatus(task2)
       const tasks = {
         [task1.id]: task1,
         [task2.id]: task2
       }
       const currentState = {
         tasks
       }
       const expectedState = {
         tasks: merge(tasks, { [task2.id]: task2Completed })
       }
       const newState = toggleTaskStatus(stateReducer(currentState), task2)

       deepEqual(newState, expectedState)
     })
   })
 })
