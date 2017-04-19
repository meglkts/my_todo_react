const { createElement: r } = require('react')
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
