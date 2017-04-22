const { createTask } = require('./create_task')
const { makeTask } = require('../models/TaskList')
const { filter, getValues } = require('../models/utils')
const { deepEqual } = require('assert')
const { stateReducer } = require('../state_reducer')

 describe('createTask.js', () => {
   describe('createTask()', () => {
     it('should coordinat adding new task to tasks object in state', () => {
       const task1 = makeTask('task-id-1', 'laundry', Date.now())
       const newTaskText = 'groceries'
       const tasks = {
         [task1.id]: task1,
       }
       const currentState = {
         tasks
       }
      //  const expectedState = {
      //    tasks: merge(tasks, { [task2.id]: task2 })
      //  }
       const newState = createTask(stateReducer(currentState), newTaskText)
       const newTaskInState = filter(o => o.text === 'groceries', getValues(newState.tasks))
       deepEqual(newTaskInState.length, 1)
       deepEqual(newTaskInState[0].status, 'active')
     })
   })
 })
