const { createElement: r } = require('react')
const { mount } = require('enzyme')
const { deepEqual } = require('assert')
const { FilterContainer } = require('./Filter')
const { FilterButton } = require('../components/taskListFooter/FilterButton')

describe('containers/Filter.js', () => {
  it('should render the three filter buttons all, active, completed', () => {
    const container = mount(r(FilterContainer, {}))
    const filterButtons = container.find(FilterButton)
    deepEqual(filterButtons.length, 3)
  })

  it('should assign `select-filter` class to selected filter button', () => {
    const container = mount(r(FilterContainer, { filter: 'active' }))
    const activeButton = container.find('#active-filter')
    deepEqual(activeButton.hasClass('selected-filter'), true)
  })

  it('should assign click handlers that call broadcast with `filterTaskList` and the filter', () => {
    let expectedClick
    const filter = 'active'
    const broadcast = (type, payload) => expectedClick = {type, payload}
    const container = mount(r(FilterContainer, { filter, broadcast }))
    const activeButton = container.find('#active-filter')
    activeButton.simulate('click')
    deepEqual(expectedClick.type, 'filterTaskList')
    deepEqual(expectedClick.payload, filter)
  })
})
