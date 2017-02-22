const { createElement: r } = require('react')
const { StatusFilterButtons, getFilterButton } = require('./StatusFilterButtons')
// const { AllFilter } = require('./AllFilter')
// const { ActiveFilter } = require('./ActiveFilter')
// const { CompletedFilter } = require('./CompletedFilter')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')

describe('<StatusFilterButtons/>', () => {
  it('should render AllFilter, ActiveFilter, and CompletedFilter components', () => {
    const footer = shallow(StatusFilterButtons({filter: 'Active'}))
    deepEqual(footer.find('button').length, 3)
    // deepEqual(footer.find(AllFilter).length, 1)
    // deepEqual(footer.find(ActiveFilter).length, 1)
    // deepEqual(footer.find(CompletedFilter).length, 1)
  })

  fit('should render filter buttons with one selected-filter class based on props.filter ', () => {
    const footer = shallow(StatusFilterButtons({filter: 'Active'}))
    deepEqual(footer.find('.selected-filter').text(), 'Active')
  })

  describe('getFilterButton()', () => {
    it('should return a button element with filterBy text', () => {
      const button = getFilterButton('Active')
      const text = button.props.children
      deepEqual(text, 'Active')
    })

    it('should set `selected-filter` class if selected=true', () => {
      const button = getFilterButton('Active', true)
      const classNames = button.props.className
      deepEqual(classNames.includes('selected-filter'), true)
    })

    it('should NOT set `selected-filter` class if selected=false', () => {
      const button = getFilterButton('Active', false)
      const classNames = button.props.className
      deepEqual(classNames.includes('selected-filter'), false)
    })
  })
})
