const React = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { TaskItem } = require('./TaskItem')
const { StatusToggle } = require('./StatusToggle')
const { TaskText } = require('./TaskText')
const { ClearButton } = require('./ClearButton')
const { makeTask, toggleStatus } = require('../../models/TaskList')

const task = makeTask('task-id-1', 'laundry', Date.now())

describe('< TaskItem />', () => {
  it('should render statusToggle and text for active tasks', () => {
    const wrapper = shallow(TaskItem({task}))
    const statusToggle = wrapper.find(StatusToggle)
    const taskText = wrapper.find(TaskText)
    deepEqual(statusToggle.length, 1)
    deepEqual(taskText.length, 1)
  })
})
