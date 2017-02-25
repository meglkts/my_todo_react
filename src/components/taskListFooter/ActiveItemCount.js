const { createElement: r } = require('react')

const ActiveItemCount = ({activeCount}) => {
  return r('div', { className: 'active-item-count pd-sub' }, `${activeCount} items left`)
}

module.exports = {
  ActiveItemCount
}
