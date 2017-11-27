import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './rootReducer'


const configureStore = (initialState) => {

  const middleware = [ ]
  const createStoreWithMiddleware = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}


export default configureStore
