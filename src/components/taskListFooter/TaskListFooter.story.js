const { createElement: r } = require('react')
const { storiesOf, action } =require('@kadira/storybook')
const { TaskListFooter } = require('./TaskListFooter')

const listStyle = {
  border: '1px solid black',
  width: '400px',
  display: 'flex'
}

storiesOf('TaskListFooter', module)
  .add('All selected', () => (
    r('div', { style: listStyle },
      r(TaskListFooter, { activeCount: 5, filter: 'All' })
    )
  ))
  .add('Active selected', () => (
    r('div', { style: listStyle },
      r(TaskListFooter, { activeCount: 5, filter: 'Active' })
    )
  ))
  .add('Completed selected', () => (
    r('div', { style: listStyle },
      r(TaskListFooter, { activeCount: 5, filter: 'Completed' })
    )
  ))
