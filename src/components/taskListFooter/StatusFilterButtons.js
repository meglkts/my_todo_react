const { createElement: r } = require('react')

const getFilterButton = (filterBy, selected) => {
  const selectClass = selected ? 'selected-filter' : ''
  return r('button', { className: `filter-button todo-btn ${selectClass} pd-sub` }, `${filterBy}`)
}

const StatusFilterButtons = ({filter}) => {
  return r('div', { className: 'status-filter flex-row pd-sub' },
    getFilterButton('All', 'All' === filter),
    getFilterButton('Active', 'Active' === filter),
    getFilterButton('Completed', 'Completed' === filter)
  )
}

module.exports = {
  StatusFilterButtons,
  getFilterButton
}
