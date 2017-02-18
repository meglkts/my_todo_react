const { makeTask, toggleStatus } = require('./TaskList')
const { deepEqual } = require('assert')

describe('TaskList.js', () => {
  describe('makeTask()', () => {
    it('should create a task object', () => {
      const task = makeTask('id', 'text', 'date')
      const expectedTask = {
        id: 'id',
        text: 'text',
        status: 'active',
        created: 'date',
        updated: 'date',
        cleared: false
      }

      deepEqual(task, expectedTask)
    })
  })

  describe('toggleStatus()', () => {
    it('should toggle task status between "completed" and "active"', () => {
      const newTask = makeTask('id', 'text', 'date')
      const completed = toggleStatus(newTask, 'updated date')
      const expectedCompleted = {
        id: 'id',
        text: 'text',
        status: 'completed',
        created: 'date',
        updated: 'updated date',
        cleared: false
      }

      deepEqual(completed, expectedCompleted)

      const backToActive = toggleStatus(completed, 'updated date 2')
      const expectedActive = {
        id: 'id',
        text: 'text',
        status: 'active',
        created: 'date',
        updated: 'updated date 2',
        cleared: false
      }

      deepEqual(backToActive, expectedActive)
    })
  })
})
