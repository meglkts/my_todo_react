const isArray = (thing) => {
  return Object.prototype.toString.call(thing) === '[object Array]'
}

const clone = (obj) => {
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

module.exports = {
  clone,
  isArray,
  merge
}
