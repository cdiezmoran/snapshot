import { combineReducers } from 'redux'
import contactReducer from './contact.red'
import personReducer from './person.red'
import userReducer from './user.red'
import organizationReducer from './organization.red';
import locationReducer from './location.red';

const snapshotApp = combineReducers({
    contactReducer,
    userReducer,
    personReducer,
    organizationReducer,
    locationReducer
})

export default snapshotApp