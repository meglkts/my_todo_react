const { createElement: r } = require('react')

const FilterButton = ({ filterBy, selectedClass, onClick }) => {
  return r('button',
    { id: `${filterBy}-filter`,
      className: `filter-button todo-btn ${selectedClass} pd-sub`,
      onClick
    },
    `${filterBy}`
  )
}

module.exports = {
  FilterButton
}
