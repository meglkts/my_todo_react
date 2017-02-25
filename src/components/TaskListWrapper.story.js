const { createElement: r } = require('react')
const { storiesOf, action } =require('@kadira/storybook')
const { TaskListWrapper } = require('./TaskListWrapper')
const { makeTask, toggleStatus, tasksToTaskList, getActiveCount } = require('../models/TaskList')

const task1 = makeTask('task-id-1', 'laundry', Date.now())
const newTask2 = makeTask('task-id-2', 'groceries', Date.now())
const task2 = toggleStatus(newTask2, Date.now())
const newTask3 = makeTask('task-id-3', 'errands', Date.now())
const task3 = toggleStatus(newTask3, Date.now())
const task4 = makeTask('task-id-4', 'email', Date.now())

const appStyle = {
  display: 'flex',
  'justify-content': 'center'
}

const taskObj = {
  [task1.id]: task1,
  [task2.id]: task2,
  [task3.id]: task3,
  [task4.id]: task4
}

const tasks = tasksToTaskList(taskObj)
const activeCount = getActiveCount(taskObj)
console.log(activeCount)

storiesOf('TaskListWrapper', module)
  .add('All tasks', () => (
    r('div', { style: appStyle },
      r(TaskListWrapper, { tasks, filter: 'All', activeCount })
    )
  ))
  .add('Active tasks', () => (
    r('div', { style: appStyle },
      r(TaskListWrapper, { tasks, filter: 'Active', activeCount })
    )
  ))
  .add('Completd tasks', () => (
    r('div', { style: appStyle },
      r(TaskListWrapper, { tasks, filter: 'Completed', activeCount })
    )
  ))
