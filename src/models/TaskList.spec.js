const { makeTask,
        toggleStatus,
        toggleAllTasksCompleted,
        toggleAllTasksActive,
        addTask,
        deleteCompleted,
        filterTaskList,
        tasksToTaskList,
        taskListToKeyed,
        getActiveCount } = require('./TaskList')
const taskListFactory = require('./task_list_factory')
const { deepEqual } = require('assert')
const { merge } = require('./utils')

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

  describe('toggleAllTasksCompleted()', () => {
    it('should set every task to have status: "complete"', () => {
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
      const actual = toggleAllTasksCompleted(tasks)
      const task1Completed = merge(task1, {status: 'completed'})
      const task4Completed = merge(task4, {status: 'completed'})
      const expected = {
        [task1.id]: task1Completed,
        [task2.id]: task2,
        [task3.id]: task3,
        [task4.id]: task4Completed
      }
      deepEqual(actual, expected)
    })
  })

  describe('toggleAllTasksActive()', () => {
    it('should set every task to have status: "active"', () => {
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
      const actual = toggleAllTasksActive(tasks)
      const task2Active = merge(task2, {status: 'active'})
      const task3Active = merge(task3, {status: 'active'})
      const expected = {
        [task1.id]: task1,
        [task2.id]: task2Active,
        [task3.id]: task3Active,
        [task4.id]: task4
      }
      deepEqual(actual, expected)
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

  describe('deleteCompleted()', () => {
    it('should return the task object with completed tasks removed', () => {
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
      const actual = deleteCompleted(tasks)
      const expected = {
        [task1.id]: task1,
        [task4.id]: task4
      }
      deepEqual(actual, expected)
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

    it('should return entire list if filter is `all`', () => {
      const active1 = makeTask('id1', 'text', Date.now())
      const active2 = makeTask('id2', 'text', Date.now())
      const temp1 = makeTask('id3', 'text', Date.now())
      const temp2 = makeTask('id4', 'text', Date.now())
      const completed1 = toggleStatus(temp1, Date.now())
      const completed2 = toggleStatus(temp2, Date.now())
      const list = [active1, active2, completed1, completed2]
      const actualList = filterTaskList('all', list)
      deepEqual(actualList, list)
    })
  })

  describe('tasksToTaskList()', () => {
    it('should return task objects in an array sorted by time created', () => {
      const task1 = makeTask('task-id-1', 'laundry', Date.now())
      const task2 = makeTask('task-id-2', 'groceries', Date.now())
      const task3 = makeTask('task-id-3', 'errands', Date.now())
      const task4 = makeTask('task-id-4', 'email', Date.now())
      const tasks = {
        [task1.id]: task1,
        [task2.id]: task2,
        [task3.id]: task3,
        [task4.id]: task4
      }
      const actual = tasksToTaskList(tasks)
      const expected = [task1, task2, task3, task4]
      deepEqual(actual, expected)
    })
  })

  describe('taskListToKeyed()', () => {
    it('should return task object keyed by id', () => {
      const task1 = makeTask('task-id-1', 'laundry', Date.now())
      const task2 = makeTask('task-id-2', 'groceries', Date.now())
      const task3 = makeTask('task-id-3', 'errands', Date.now())
      const task4 = makeTask('task-id-4', 'email', Date.now())
      const list = [task1, task2, task3, task4]
      const actual = taskListToKeyed(list)
      const expected = {
        [task1.id]: task1,
        [task2.id]: task2,
        [task3.id]: task3,
        [task4.id]: task4
      }
      deepEqual(actual, expected)
    })
  })

  describe('getActiveCount()', () => {
    it('should return a count of active tasks', () => {
      const active1 = makeTask('id1', 'text', Date.now())
      const active2 = makeTask('id2', 'text', Date.now())
      const temp1 = makeTask('id3', 'text', Date.now())
      const completed1 = toggleStatus(temp1, Date.now())
      const tasks = {
        [active1.id]: active1,
        [active2.id]: active2,
        [completed1.id]: completed1,
      }
      deepEqual(getActiveCount(tasks), 2)
    })
  })
})
