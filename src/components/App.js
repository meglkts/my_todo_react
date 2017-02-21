const React = require('react')
const r = React.createElement
const { Title } = require('./Title')
// require('./App.css')

const App = React.createClass({
  render () {
    return (
      r('div', {className: 'App'},
        r(Title, {className: 'Title'}),
        r('p', {className: 'App-intro'}, 'list')
      )
    )
  }
})

module.exports = {
  App
}
