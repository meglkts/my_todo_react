const { createElement: r } = require('react')

const ClearButton = ({ onClearButtonClick }) => {
  return r('button', {
    className: `todo-btn clear-task icon text-sub`,
    onClick: onClearButtonClick
  },
  '\u2573')
}

module.exports = {
  ClearButton
}
