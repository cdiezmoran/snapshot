import { combineReducers } from 'redux'
import contactReducer from './contact.red'
import personReducer from './person.red'
import userReducer from './user.red'
import organizationReducer from './organization.red';

const snapshotApp = combineReducers({
    //contactReducer,
    userReducer,
    personReducer,
    organizationReducer
})

export default snapshotApp