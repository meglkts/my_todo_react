const React = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { TaskText } = require('./TaskText')

describe('< TaskText />', () => {
  it('should render TaskText with className set to value of props.status', () => {
    const status = 'active'
    const wrapper = shallow(TaskText({status}))
    deepEqual(wrapper.hasClass(status), true)
  })

  it('should set text to props.text', () => {
    const text = 'do laundry'
    const wrapper = shallow(TaskText({text}))
    deepEqual(wrapper.text(), text)
  })
})
