const { createElement: r } = require('react')
const { storiesOf, action } =require('@kadira/storybook')
const { TaskListWrapper } = require('./TaskListWrapper')
const { makeTask, toggleStatus } = require('../models/TaskList')

const task1 = makeTask('task-id-1', 'laundry', Date.now())
const newTask = makeTask('task-id-2', 'groceries', Date.now())
const task2 = toggleStatus(newTask, Date.now())
const task3 = makeTask('task-id-3', 'errands', Date.now())
const task4 = makeTask('task-id-4', 'email', Date.now())

const appStyle = {
  display: 'flex',
  'justify-content': 'center'
}

const tasks = {
  [task1.id]: task1,
  [task2.id]: task2,
  [task3.id]: task3,
  [task4.id]: task4
}

storiesOf('TaskListWrapper', module)
  .add('multiple tasks', () => (
    r('div', { style: appStyle },
      r(TaskListWrapper, { tasks })
    )
  ))
