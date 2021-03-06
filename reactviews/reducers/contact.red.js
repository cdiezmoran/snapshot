import * as contactAction from '../actions/contact.action'
import { handle } from 'redux-pack';
const initialState = {
    contacts: [],
    contact: null,
    findContacts: [],
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

        case contactAction.FIND_CONTACTS:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, findContacts: action.payload }),
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

        case contactAction.CHANGE_CONTACT:
            let contact = state.contact;
            contact[action.key]=action.value
            return {...state, contact: {...contact}}

    }
    return state;
}

export default contactReducer;