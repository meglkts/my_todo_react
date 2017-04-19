const { createElement: r } = require('react')
const { ActiveItemCount } = require('../components/taskListFooter/ActiveItemCount')
const { getActiveCount } = require('../models/TaskList')

const ActiveCountContainer = ({ taskList }) => {
  const activeCount = getActiveCount(taskList)
  return r(ActiveItemCount, { activeCount })
}

module.exports = {
  ActiveCountContainer
}
