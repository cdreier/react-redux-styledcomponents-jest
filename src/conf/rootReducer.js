import { combineReducers } from 'redux'

const debug = (state = {}, action = {}) => {
  switch (action.type){
    case 'TODO':
      return state
  }
  return state
}

export default combineReducers({
  debug,
})
