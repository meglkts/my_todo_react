const React =require('react')
const r = React.createElement
const ReactDOM = require('react-dom')
const { AppContainer } = require('./containers/App')

const renderApp = (state) => {
  ReactDOM.render(
    r(AppContainer, state),
    document.getElementById('root')
  )
}

module.exports = {
  renderApp
}
