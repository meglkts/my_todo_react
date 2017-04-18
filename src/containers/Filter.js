const { createElement: r } = require('react')
const { FilterButton } = require('../components/taskListFooter/FilterButton')

const generateFilterButton = (f, filter, broadcast) => {
  const isActive = f => f === filter ? 'selected-filter' : ''
  return (
    r(FilterButton, {
      filterBy: f,
      selectedClass: isActive(f),
      onClick: () => broadcast('filterTaskList', f)
    })
  )
}

const FilterContainer = ({ filter, broadcast }) => {
  return r('div', { className: 'status-filter flex-row pd-sub' },
    generateFilterButton('all', filter, broadcast),
    generateFilterButton('active', filter, broadcast),
    generateFilterButton('completed', filter, broadcast),
  )
}

module.exports = {
  FilterContainer,
  generateFilterButton
}
