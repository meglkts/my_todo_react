const { equal, deepEqual, notEqual } = require('assert')
const { clone,
        isArray,
        merge,
        getPluralization,
        filter,
        getValues,
        pluck } = require('./utils')

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

    it('should return original values for integers and strings', () => {
      const a = 5
      const b = 'five'
      const copyA = clone(a)
      const copyB = clone(b)
      equal(a, copyA)
      deepEqual(a, copyA)
      equal(b, copyB)
      deepEqual(b, copyB)
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

  describe('filter()', () => {
    it('should merge two objects into one object, second object overwrites first', () => {
      const obj1 = { a: 1, b: 2, c: 3 }
      const obj2 = { a: 1, b: 2, c: 3 }
      const obj3 = { a: 'no', b: 2, c: 3 }
      const list = [obj1, obj2, obj3]
      const filterByFn = x => x.a === 1
      const actual = filter(filterByFn, list)
      const expected = [obj1, obj2]
      deepEqual(actual, expected)
    })
  })

  describe('getPluralization()', () => {
    it('should return a string with appropriate pluralization based on count', () => {
      deepEqual(getPluralization('cat', 1), 'cat')
      deepEqual(getPluralization('cat', 5), 'cats')
      deepEqual(getPluralization('cat', 0), 'cats')
    })
  })

  describe('getValues()', () => {
    it('should return a string with appropriate pluralization based on count', () => {
      const obj = { a: 1, b: 2, c: 3 }
      deepEqual(getValues(obj), [1, 2, 3])
    })
  })

  describe('pluck()', () => {
    it('should return an array of the values for a given key plucked from each object', () => {
      const obj1 = { a: 1, b: 2, c: 3 }
      const obj2 = { a: 4, b: 5, c: 6 }
      const key = 'b'
      deepEqual(pluck('b', [obj1, obj2]), [2, 5])
    })
  })
})
