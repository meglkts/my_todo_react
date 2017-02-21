const { createElement: r } = require('react')
const { storiesOf, action } =require('@kadira/storybook')
const { TaskItem } = require('./TaskItem')
const { makeTask, toggleStatus } = require('../../models/TaskList')

const activeTask = makeTask('task-id-1', 'laundry', Date.now())
const activeTask2 = makeTask('task-id-2', 'groceries', Date.now())
const completedTask = toggleStatus(activeTask2, Date.now())

const listStyle = {
  border: '1px solid black',
  width: '400px',
  display: 'flex'
}

storiesOf('TaskItem', module)
  .add('active', () => (
    r('div', { style: listStyle },
      r(TaskItem, { task: activeTask })
    )
  ))
  .add('completed', () => (
    r('div', { style: listStyle },
      r(TaskItem, { task: completedTask })
    )
  ))
