const { createElement: r } = require('react')
const { deepEqual } = require('assert')
const { shallow } = require('enzyme')
const { ClearCompletedButton } = require('./ClearCompletedButton')

describe('ClearCompletedButton.js', () => {
  describe('ClearCompletedButton()', () => {
    it('should render a button with text `Clear completed`', () => {
      const broadcast = () => {}
      const text = shallow(r(ClearCompletedButton, { broadcast })).text()
      deepEqual(text, 'Clear completed')
    })

    it('should call broadcast with type `clearCompleted`', () => {
      let broadcastType
      const broadcast = (type, payload) => {
        broadcastType = type
      }
      shallow(r(ClearCompletedButton, { broadcast })).simulate('click')
      deepEqual(broadcastType, 'clearCompleted')
    })
  })
})
