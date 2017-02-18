const React = require('react')
const r = React.createElement
// require('./App.css')

const App = React.createClass({
  render () {
    return (
      r('div', {className: 'App'},
        r('div', {className: 'App-header'},
          r('h2', {}, 'title')
        ),
        r('p', {className: 'App-intro'}, 'list')
      )
    )
  }
})

module.exports = {
  App
}
