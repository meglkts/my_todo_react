const { createElement: r } = require('react')

const Title = () => {
  return r('h1', { className: 'text-title pd-title reddish' }, 'todos')
}

module.exports = {
  Title
}
