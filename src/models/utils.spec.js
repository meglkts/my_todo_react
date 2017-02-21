const { equal, deepEqual, notEqual } = require('assert')
const { clone, isArray, merge } = require('./utils')

describe('utils.js', () => {
  describe('clone()', () => {
    it('should return an unreferenced copy of an object', () => {
      const obj = { foo: 'bar' }
      const copy = clone(obj)
      equal(obj, obj)
      notEqual(obj, copy)
      deepEqual(obj, copy)
    })

    it('should return an unreferenced copy of an array', () => {
      const a = [{ foo: 'bar' }]
      const copy = clone(a)
      equal(a, a)
      notEqual(a, copy)
      deepEqual(a, copy)
      equal(isArray(copy), true)
    })
  })

  describe('isArray()', () => {
    it('should return true if input is array [], false if object {}', () => {
      equal(isArray(['foo', 'bar']), true)
      equal(isArray({foo: 'bar'}), false)
    })
  })

  describe('merge()', () => {
    it('should merge two objects into one object, second object overwrites first', () => {
      const firstObj = { a: 1, b: 2 }
      const secObj = { b: 'muahaha', c: 4}
      const merged = merge(firstObj, secObj)
      const expected = {a:1, b:'muahaha', c:4}
      deepEqual(merged, expected)
    })
  })
})
