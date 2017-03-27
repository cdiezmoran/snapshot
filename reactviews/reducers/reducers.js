import { combineReducers } from 'redux'
import contactReducer from './contact.red'
import personReducer from './person.red'
import userReducer from './user.red'

const snapshotApp = combineReducers({
    contactReducer,
    userReducer,
    personReducer
})

export default snapshotApp