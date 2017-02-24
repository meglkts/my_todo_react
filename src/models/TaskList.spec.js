const { makeTask, toggleStatus, addTask, filterTaskList } = require('./TaskList')
const { deepEqual } = require('assert')
const { merge } = require('merge')

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

  describe('addTask()', () => {
    it('should add a new task to the list', () => {
      const now = () => 1234
      const task = makeTask('id1', 'text', now() - 1)
      const list = {
        id1: task
      }
      const { newList, newestTask } = addTask(now, list, 'text two')
      const expectedNewList = {
        id1: task,
        [newestTask.id]: newestTask
      }
      deepEqual(newList, expectedNewList)
    })
  })

  describe('filterTaskList()', () => {
    it('should return a task list filtered by filter', () => {
      const active1 = makeTask('id1', 'text', Date.now())
      const active2 = makeTask('id2', 'text', Date.now())
      const temp1 = makeTask('id3', 'text', Date.now())
      const temp2 = makeTask('id4', 'text', Date.now())
      const completed1 = toggleStatus(temp1, Date.now())
      const completed2 = toggleStatus(temp2, Date.now())
      const filterActive = 'active'
      const filterCompleted = 'completed'
      const list = [active1, active2, completed1, completed2]
      const activeList = filterTaskList(filterActive, list)
      const completedList = filterTaskList(filterCompleted, list)
      const expectedActive = [active1, active2]
      const expectedCompleted = [completed1, completed2]
      deepEqual(activeList, expectedActive)
      deepEqual(completedList, expectedCompleted)
    })
  })
})
