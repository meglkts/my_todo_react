const isArray = (thing) => {
  return Object.prototype.toString.call(thing) === '[object Array]'
}

const clone = (obj) => {
  if (typeof obj !== 'object') return obj
  const keys = Object.keys(obj)
  let acc = {}
  if (isArray(obj)) acc = []
  return keys.reduce((p, c) => {
    p[c] = obj[c]
    return p
  }, acc)
}

const merge = (a, b) => {
  const copyA = clone(a)
  const copyB = clone(b)
  return Object.assign({}, copyA, copyB)
}

const getPluralization = (noun, count) => {
  if ( count === 1 ) return noun
  return noun + 's'
}

const filter = (filterBy, array) => {
  const arrayCopy = clone(array)
  return arrayCopy.filter(filterBy)
}

const getValues = (obj) => {
  const keys = Object.keys(obj)
  return keys.map((k) => {
    return clone(obj[k])
  })
}

const pluck = (key, array) => {
  return array.map(el => el[key])
}

module.exports = {
  clone,
  isArray,
  merge,
  getPluralization,
  filter,
  getValues,
  pluck
}
