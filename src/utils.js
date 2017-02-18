const clone = (obj) => {
  const keys = Object.keys(obj)
  return keys.reduce((p, c) => {
    p[c] = obj[c]
    return p
  }, {})
}

module.exports = {
  clone
}
