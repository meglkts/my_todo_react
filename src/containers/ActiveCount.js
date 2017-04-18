const { createElement: r } = require('react')
const { ActiveItemCount } = require('../components/taskListFooter/ActiveItemCount')
const { getActiveCount } = require('../models/TaskList')

const ActiveCountContainer = ({ tasks }) => {
  const activeCount = getActiveCount(tasks)
  return r(ActiveItemCount, { activeCount })
}

module.exports = {
  ActiveCountContainer
}
