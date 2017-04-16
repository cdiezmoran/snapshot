import {LOAD_PERSON,LOAD_PERSON_ORGANIZATION} from '../actions/person.action'
import { handle } from 'redux-pack';

const initialState = {
    contacts: [],
    contact: null,
    error: null
}

function personReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PERSON:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, contacts: action.payload }),
            });

        case LOAD_PERSON_ORGANIZATION:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, contactsOrganization: action.payload }),
            });
    }
    return state;
}

export default personReducer;