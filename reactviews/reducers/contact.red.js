import * as contactAction from '../actions/contact.action'
import { handle } from 'redux-pack';
const initialState = {
    contacts: [],
    contact: null
}

function contactReducer(state = initialState, action) {
    switch (action.type) {

        case contactAction.LOAD_CONTACT:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, contact: action.payload }),
            });

        case contactAction.FETCH_CONTACTS_BY_PERSON:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, contacts: action.payload, contact: null }),
            });

        case contactAction.ADD_CONTACT:
            return {...state, contact: {
                forPerson: action.person
            }};

        case contactAction.SAVE_CONTACT:
        case contactAction.CREATE_CONTACT:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, contact: action.payload }),
            });

        case contactAction.REMOVE_CONTACT:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, contact: null }),
            });

    }
    return state;
}

export default contactReducer;