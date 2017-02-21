const React = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { StatusToggle } = require('./StatusToggle')

describe('< StatusToggle />', () => {
  it('should render statusToggle with className set to value of props.status', () => {
    const wrapper = shallow(StatusToggle({status: 'active'}))
    deepEqual(wrapper.hasClass('active'), true)
  })
})
