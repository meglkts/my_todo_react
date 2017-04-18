const { createElement: r } = require('react')

const getFilterButton = (filterBy, selected, broadcast) => {
  const selectClass = selected ? 'selected-filter' : ''
  return (
    r('button',
      {
        id: `${filterBy}-filter`,
        className: `filter-button todo-btn ${selectClass} pd-sub`,
        onClick: () => broadcast('filterTaskList', filterBy)
      },
      `${filterBy}`)
  )
}

const StatusFilterButtons = ({filter, broadcast}) => {
  return r('div', { className: 'status-filter flex-row pd-sub' },
    getFilterButton('All', 'All' === filter, broadcast),
    getFilterButton('Active', 'Active' === filter, broadcast),
    getFilterButton('Completed', 'Completed' === filter, broadcast)
  )
}

module.exports = {
  StatusFilterButtons,
  getFilterButton
}
