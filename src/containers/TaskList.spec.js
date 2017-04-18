const { createElement: r } = require('react')
const { mount } = require('enzyme')
const { deepEqual } = require('assert')
const { TaskListContainer } = require('./TaskList')
const { TaskList } = require('../components/taskList/TaskList')

describe('containers/TaskList.js', () => {
  it('should render TaskList with visibleTasks set to filtered tasks', () => {
    const t1 = { id: 1, status: 'active' }
    const t2 = { id: 2, status: 'active' }
    const t3 = { id: 3, status: 'completed' }
    const tasks = [t1, t2, t3]
    const filter = 'active'
    const container = mount(r(TaskListContainer, { tasks, filter }))
    const taskList = container.find(TaskList)
    deepEqual(taskList.props().visibleTasks, [t1, t2])
  })
})
