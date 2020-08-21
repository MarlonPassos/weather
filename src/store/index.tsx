import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import alertReducer from './reducers/alertReducer'
import weatherReducer from './reducers/weatherReducer'

const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

export type RootState = ReturnType<typeof rootReducer>
export default store
