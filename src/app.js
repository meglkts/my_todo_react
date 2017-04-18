const React =require('react')
const r = React.createElement
const ReactDOM = require('react-dom')
const { App } = require('./components/App')

const renderApp = (state) => {
  ReactDOM.render(
    r(App, state),
    document.getElementById('root')
  )
}

module.exports = {
  renderApp
}
