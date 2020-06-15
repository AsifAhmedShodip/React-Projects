import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'

// const rootReducer = combineReducers({
// 	cake: cakeReducer,
// 	icecream: iceCreamReducer,
// 	total: totalItemReducer
// })

const middleware = [ thunk, logger ]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
