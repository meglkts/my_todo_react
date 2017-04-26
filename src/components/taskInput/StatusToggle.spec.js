const React = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { SelectAllToggle } = require('./SelectAllToggle')

describe('< SelectAllToggle />', () => {
  it('should render statusToggle with className set to value of props.selected', () => {
    const broadcast = () => {}
    const wrapper = shallow(SelectAllToggle({iconClass: 'all-complete'}))
    deepEqual(wrapper.hasClass('icon-all-complete'), true)
  })

  it('should call onClick prop when clicked', () => {
    let clicked
    const onClick = (type, payload) => {
      clicked = true
    }
    shallow(SelectAllToggle({iconClass: 'all', onClick})).simulate('click')
    deepEqual(clicked, true)
  })
})
