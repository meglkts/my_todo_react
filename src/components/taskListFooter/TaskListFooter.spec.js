const { createElement: r } = require('react')
const { TaskListFooter } = require('./TaskListFooter')
const { ActiveItemCount } = require('./ActiveItemCount')
const { FilterButton } = require('./FilterButton')
const { ClearCompletedButton } = require('./ClearCompletedButton')
const { mount } = require('enzyme')
const { deepEqual } = require('assert')

describe('<TaskListFooter/>', () => {
  it('should render ActiveItemCount, 3 FilterButton(s), and ClearCompletedButton components', () => {
    const footer = mount(r(TaskListFooter, { taskList: {}, filter: 'all' }))
    deepEqual(footer.find(ActiveItemCount).length, 1)
    deepEqual(footer.find(FilterButton).length, 3)
    deepEqual(footer.find(ClearCompletedButton).length, 1)
  })
})
