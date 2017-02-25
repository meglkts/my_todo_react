const React = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { TaskList, generateTaskItems } = require('./TaskList')
const { TaskItem } = require('../taskItem/TaskItem')
const { makeTask, toggleStatus } = require('../../models/TaskList')

const task1 = makeTask('task-id-1', 'laundry', Date.now())
const newTask = makeTask('task-id-2', 'groceries', Date.now())
const task2 = toggleStatus(newTask, Date.now())
const tasks = [task1, task2]

describe('< TaskList />', () => {
  it('should render a list of TaskItems', () => {
    const wrapper = shallow(TaskList({tasks}))
    taskElements = wrapper.find('.task-item')
    deepEqual(taskElements.length, 2)
    deepEqual(taskElements.nodes[0].key, task1.id)
    deepEqual(taskElements.nodes[1].key, task2.id)
  })
})

describe('generateTaskItems', () => {
  it('should return a < TaskItem /> for each task', () => {
    const actual = generateTaskItems(tasks)
    const expected = [
      TaskItem({task: task1, key: task1.id}),
      TaskItem({task: task2, key: task2.id})
    ]
    deepEqual(actual, expected)
  })
})
