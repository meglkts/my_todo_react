const { createElement: r } = require('react')

const ActiveItemCount = ({activeCount}) => {
  return r('div', { className: 'active-item-count' }, `${activeCount} items left`)
}

module.exports = {
  ActiveItemCount
}
