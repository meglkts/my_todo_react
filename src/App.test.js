const React = require('React')
const r = React.createElement
const { App } = require('./App')

describe('App.js', () => {
  describe('App', () => {
    it('should render without crashing', () => {
      const el = r(App, { foo: 'bar' })
      expect(el.props.foo).toBe('bar')
    })
  })
})
