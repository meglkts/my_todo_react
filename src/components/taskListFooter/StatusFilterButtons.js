const { createElement: r } = require('react')

const StatusFilterButtons = ({filter}) => {
  return r('div', { className: 'status-filter flex-row' },
    r('button', { className: 'filter-button todo-btn' }, 'All'),
    r('button', { className: 'filter-button todo-btn' }, 'Active'),
    r('button', { className: 'filter-button todo-btn' }, 'Completed')
  )
}

module.exports = {
  StatusFilterButtons
}
