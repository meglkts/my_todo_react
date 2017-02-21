const React = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { SelectAllToggle } = require('./SelectAllToggle')

describe('< SelectAllToggle />', () => {
  it('should render statusToggle with className set to value of props.selected', () => {
    const wrapper = shallow(SelectAllToggle({selected: 'all'}))
    deepEqual(wrapper.hasClass('all'), true)
  })
})
