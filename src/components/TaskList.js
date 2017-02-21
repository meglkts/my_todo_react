const { createElement: r } = require('react')

const TaskList = () => {
  return r('div', {},
    r(TaskInput),
    r(List),
    r()
  )
}

module.exports = {
  Title
}
