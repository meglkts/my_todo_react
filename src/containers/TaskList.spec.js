const { createElement: r } = require('react')
const { mount } = require('enzyme')
const { deepEqual } = require('assert')
const { TaskListContainer } = require('./TaskList')
const { TaskList } = require('../components/taskList/TaskList')
const { StatusToggle } = require('../components/taskItem/StatusToggle')

describe('containers/TaskList.js', () => {
  it('should render TaskList with visibleTasks set to filtered taskList', () => {
    const t1 = { id: 1, status: 'active' }
    const t2 = { id: 2, status: 'active' }
    const t3 = { id: 3, status: 'completed' }
    const taskList = [t1, t2, t3]
    const filter = 'active'
    const container = mount(r(TaskListContainer, { taskList, filter }))
    const taskListContainer = container.find(TaskList)
    deepEqual(taskListContainer.props().visibleTasks, [t1, t2])
  })

  it('should assign click handlers that call broadcast with `toggleTaskStatus` and task', () => {
    let expectedClick
    const task = {
      id: 'id1',
      status: 'active'
    }
    const taskList = [task]
    const broadcast = (type, payload) => expectedClick = {type, payload}
    const container = mount(r(TaskListContainer, { taskList, filter: 'all', broadcast }))
    const statusToggle = container.find(StatusToggle)
    statusToggle.simulate('click')
    deepEqual(expectedClick.type, 'toggleTaskStatus')
    deepEqual(expectedClick.payload, task)
  })
})
