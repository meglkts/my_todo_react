const React = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { TaskList, generateTaskItems } = require('./TaskList')
const { TaskItem } = require('../taskItem/TaskItem')
const { makeTask, toggleStatus } = require('../../models/TaskList')

const task1 = makeTask('task-id-1', 'laundry', Date.now())
const newTask = makeTask('task-id-2', 'groceries', Date.now())
const task2 = toggleStatus(newTask, Date.now())
const visibleTasks = [task1, task2]

describe('< TaskList />', () => {
  it('should render a list of TaskItems', () => {
    const wrapper = shallow(TaskList({visibleTasks}))
    taskElements = wrapper.find('.task-item')
    deepEqual(taskElements.length, 2)
    deepEqual(taskElements.nodes[0].key, task1.id)
    deepEqual(taskElements.nodes[1].key, task2.id)
  })
})

describe('generateTaskItems', () => {
  it('should return a < TaskItem /> for each task', () => {
    const onStatusToggleClick = () => {}
    const actual = generateTaskItems(visibleTasks, onStatusToggleClick)
    const expected = [
      TaskItem({task: task1, key: task1.id, onStatusToggleClick: () => onStatusToggleClick(task1)}),
      TaskItem({task: task2, key: task2.id, onStatusToggleClick: () => onStatusToggleClick(task2)})
    ]
    deepEqual(JSON.stringify(actual), JSON.stringify(expected))
  })
})
