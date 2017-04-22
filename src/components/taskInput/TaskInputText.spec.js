const { createElement: r } = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { TaskInputText, getText } = require('./TaskInputText')

describe('< TaskInputText />', () => {
  it('should render TaskInputText with placeholder text: `What needs to be done?`', () => {
    const inputBox = shallow(TaskInputText({broadcast: () => {}}))
    deepEqual(inputBox.node.props.placeholder, 'What needs to be done?')
  })

  it('should set the text for each onChange called', () => {
    shallow(r(TaskInputText, {})).simulate('change', { target: { value: 'laundry' }})
    deepEqual(getText(), 'laundry')
  })

  it('should call broadcast with createTask when enter is pressed', () => {
    let broadcastCalledWith
    const broadcast = (type, payload) => {
      broadcastCalledWith = {
        type,
        payload
      }
    }
    const inputBox = shallow(r(TaskInputText, { broadcast }))
    const target = { value: 'laundry' }
    inputBox.simulate('change', { target})
    inputBox.simulate('keyup', { which: 13, target })
    deepEqual(broadcastCalledWith, {
      type: 'createTask',
      payload: 'laundry'
    })
  })

  it('should clear the text when enter is pressed', () => {
    let broadcastCalledWith
    // const broadcast = (type, payload) => ({
    //   type,
    //   payload
    // })
    const inputBox = shallow(r(TaskInputText, { broadcast: () => {} }))
    const target = { value: 'laundry' }
    inputBox.simulate('change', { target})
    inputBox.simulate('keyup', { which: 13, target })
    deepEqual(getText(), '')
  })
})
