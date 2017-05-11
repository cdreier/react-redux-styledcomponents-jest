import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './src/conf/store'
import App from './src/App'


const store = configureStore({})

renderWithHotReload(App)

if (module.hot) {
  module.hot.accept('./src/App', () => {
    const NextRoot = require('./src/App.js').default
    renderWithHotReload(NextRoot)
  })
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <RootElement />
      </Provider>
    </AppContainer>,
    document.getElementById('mount')
  )
}
