const { equal, deepEqual, notEqual } = require('assert')
const { clone } = require('./utils')

describe('utils.js', () => {
  describe('clone()', () => {
    fit('should return an unreferenced copy of an object', () => {
      const obj = { foo: 'bar' }
      const copy = clone(obj)
      equal(obj, obj)
      notEqual(obj, copy)
      deepEqual(obj, copy)
    })
  })
})
