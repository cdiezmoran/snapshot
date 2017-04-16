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
                success: prevState => ({ ...prevState, people: action.payload }),
            });

        case LOAD_PERSON_ORGANIZATION:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, peopleOrganization: action.payload }),
            });
    }
    return state;
}

export default personReducer;