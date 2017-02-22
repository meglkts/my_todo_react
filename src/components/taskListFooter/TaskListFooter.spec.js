const { createElement: r } = require('react')
const { TaskListFooter } = require('./TaskListFooter')
const { ActiveItemCount } = require('./ActiveItemCount')
const { StatusFilterButtons } = require('./StatusFilterButtons')
const { ClearCompletedButton } = require('./ClearCompletedButton')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')

describe('<TaskListFooter/>', () => {
  it('should render ActiveItemCount, StatusFilterButtons, and ClearCompletedButton components', () => {
    const footer = shallow(TaskListFooter({activeCount: 5}))
    deepEqual(footer.find(ActiveItemCount).length, 1)
    deepEqual(footer.find(StatusFilterButtons).length, 1)
    deepEqual(footer.find(ClearCompletedButton).length, 1)
  })
})
