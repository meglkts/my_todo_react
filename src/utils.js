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

module.exports = {
  clone,
  isArray
}
