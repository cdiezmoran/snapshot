import {LOAD_PERSON,LOAD_PERSON_SUCCESS} from '../actions/person.action'
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
                failure: prevState => ({ ...prevState, error: payload }),
                success: prevState => ({ ...prevState, contacts: payload }),
            });

        case LOAD_PERSON_SUCCESS:
            return {...state, contacts: action.contacts }
    }
    return state;
}

export default personReducer;