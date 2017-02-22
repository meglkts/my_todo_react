const { createElement: r } = require('react')
const { StatusFilterButtons } = require('./StatusFilterButtons')
// const { AllFilter } = require('./AllFilter')
// const { ActiveFilter } = require('./ActiveFilter')
// const { CompletedFilter } = require('./CompletedFilter')
const { shallow } = require('enzyme')
const { deepEqual } = require('assert')

describe('<StatusFilterButtons/>', () => {
  it('should render AllFilter, ActiveFilter, and CompletedFilter components', () => {
    const footer = shallow(StatusFilterButtons({filter: 'active'}))
    deepEqual(footer.find('button').length, 3)
    // deepEqual(footer.find(AllFilter).length, 1)
    // deepEqual(footer.find(ActiveFilter).length, 1)
    // deepEqual(footer.find(CompletedFilter).length, 1)
  })
})
