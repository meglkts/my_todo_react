const { createElement: r } = require('react')
const { mount } = require('enzyme')
const { deepEqual } = require('assert')
const { SelectAllContainer } = require('./SelectAll')
const { SelectAllToggle } = require('../components/taskInput/SelectAllToggle')

describe('containers/SelectAll.js', () => {
  it('should render SelectAllToggle with class icon-all-complete if completeAll:true', () => {
    const container = mount(r(SelectAllContainer, { completeAll: true }))
    const selectAllToggle = container.find(SelectAllToggle)
    deepEqual(selectAllToggle.hasClass('icon-all-complete'), true)
  })

  it('should render SelectAllToggle with class icon-all-active if completeAll:false', () => {
    const container = mount(r(SelectAllContainer, { completeAll: false }))
    const selectAllToggle = container.find(SelectAllToggle)
    deepEqual(selectAllToggle.hasClass('icon-all-active'), true)
  })

  it('should assign click handler that calls broadcast with `markAllComplete` if completeAll:false', () => {
    let expectedClick
    const completeAll = false
    const broadcast = (type) => expectedClick = type
    const container = mount(r(SelectAllContainer, { completeAll, broadcast }))
    const selectAllToggle = container.find(SelectAllToggle)
    selectAllToggle.simulate('click')
    deepEqual(expectedClick, 'markAllComplete')
  })

  it('should assign click handler that calls broadcast with `markAllActive` if completeAll:true', () => {
    let expectedClick
    const completeAll = true
    const broadcast = (type) => expectedClick = type
    const container = mount(r(SelectAllContainer, { completeAll, broadcast }))
    const selectAllToggle = container.find(SelectAllToggle)
    selectAllToggle.simulate('click')
    deepEqual(expectedClick, 'markAllActive')
  })
})
