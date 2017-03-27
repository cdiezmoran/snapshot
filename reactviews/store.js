import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import snapshotApp from './reducers/reducers'

let store = createStore(snapshotApp, applyMiddleware(thunk))
export default store