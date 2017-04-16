import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { middleware as reduxPackMiddleware } from 'redux-pack'

import snapshotApp from './reducers/reducers'
const logger = createLogger()
let store = createStore(snapshotApp, applyMiddleware(thunk, reduxPackMiddleware, logger))
export default store