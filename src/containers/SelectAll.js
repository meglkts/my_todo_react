const { createElement: r } = require('react')
const { SelectAllToggle } = require('../components/taskInput/SelectAllToggle')

const SelectAllContainer = ({ completeAll, broadcast }) => {
  const iconClass = completeAll ? 'all-complete' : 'all-active'
  const broadcastType = completeAll ? 'markAllActive' : 'markAllComplete'
  return r(SelectAllToggle, {
    iconClass,
    onClick: () => broadcast(broadcastType)
  })
}

module.exports = {
  SelectAllContainer
}
