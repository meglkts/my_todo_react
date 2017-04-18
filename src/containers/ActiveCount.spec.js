const { createElement: r } = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { ActiveCountContainer } = require('./ActiveCount')
const { ActiveItemCount } = require('../components/taskListFooter/ActiveItemCount')

describe('< ActiveItemCount />', () => {
  it('should render ActiveItemCount with activeCount prop set # of tasks with active status', () => {
    const tasks = [
      { status: 'active' },
      { status: 'active' },
      { status: 'completed' }
    ]
    const container = shallow(r(ActiveCountContainer, { tasks }))
    const activeItemCount = container.find(ActiveItemCount)
    deepEqual(activeItemCount.props().activeCount, 2)
  })
})
