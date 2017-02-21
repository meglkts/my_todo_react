const { createElement: r } = require('react')
const { storiesOf, action } =require('@kadira/storybook')
const { TaskList } = require('./TaskList')
const { makeTask, toggleStatus } = require('../../models/TaskList')

const task1 = makeTask('task-id-1', 'laundry', Date.now())
const newTask = makeTask('task-id-2', 'groceries', Date.now())
const task2 = toggleStatus(newTask, Date.now())

const wrapperStyle = {
  border: '1px solid black',
  width: '400px',
  display: 'flex'
}

const tasks = {
  [task1.id]: task1,
  [task2.id]: task2
}

storiesOf('TaskList', module)
  .add('multiple tasks', () => (
    r('div', { style: wrapperStyle },
      r(TaskList, { tasks })
    )
  ))
