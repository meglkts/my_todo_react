const { createElement: r } = require('react')
const { storiesOf, action } =require('@kadira/storybook')
const { App } = require('./App')
const { makeTask, toggleStatus, tasksToTaskList, getActiveCount, filterTaskList } = require('../models/TaskList')

const task1 = makeTask('task-id-1', 'laundry', Date.now())
const newTask2 = makeTask('task-id-2', 'groceries', Date.now())
const task2 = toggleStatus(newTask2, Date.now())
const newTask3 = makeTask('task-id-3', 'errands', Date.now())
const task3 = toggleStatus(newTask3, Date.now())
const task4 = makeTask('task-id-4', 'email', Date.now())

const taskObj = {
  [task1.id]: task1,
  [task2.id]: task2,
  [task3.id]: task3,
  [task4.id]: task4
}

const tasks = tasksToTaskList(taskObj)
const activeTasks = filterTaskList('active', tasks)
const completedTasks = filterTaskList('completed', tasks)
const activeCount = getActiveCount(taskObj)

storiesOf('App', module)
  .add('All tasks showing', () => (
    r('body', {},
      r(App, { tasks, filter: 'All', activeCount })
    )
  ))
  .add('Active tasks filtered', () => (
    r('body', {},
      r(App, { tasks: activeTasks, filter: 'Active', activeCount })
    )
  ))
  .add('Completd tasks filtered', () => (
    r('body', {},
      r(App, { tasks: completedTasks, filter: 'Completed', activeCount })
    )
  ))
