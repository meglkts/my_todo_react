const { createElement: r } = require('react')

const SelectAllToggle = ({iconClass, onClick}) => {
  return r('button', {
      className: `todo-btn select-all-toggle icon icon-${iconClass}`,
      onClick
    }
  )
}

module.exports = {
  SelectAllToggle
}
