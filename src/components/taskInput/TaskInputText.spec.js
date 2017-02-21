const React = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { TaskInputText } = require('./TaskInputText')

describe('< TaskInputText />', () => {
  it('should render TaskInputText with placeholder text: `What needs to be done?`', () => {
    const status = 'active'
    const inputBox = shallow(TaskInputText()).find('input')
    deepEqual(inputBox.node.props.placeholder, 'What needs to be done?')
  })
})
