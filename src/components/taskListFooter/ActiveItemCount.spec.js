const { createElement: r } = require('react')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')
const { ActiveItemCount } = require('./ActiveItemCount')

describe('< ActiveItemCount />', () => {
  it('should render the text `* items left` for the activeCount', () => {
    const activeItemCount = shallow(ActiveItemCount({activeCount: 5}))
    deepEqual(activeItemCount.text(), '5 items left')
  })
})
