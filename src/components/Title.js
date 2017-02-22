const { createElement: r } = require('react')

const Title = () => {
  return r('h1', { className: 'pd-title' }, 'todos')
}

module.exports = {
  Title
}
