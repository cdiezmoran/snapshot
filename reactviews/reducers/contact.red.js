import * as contactAction from '../actions/contact.action'

const initialState = {
    contacts: [],
    contact: null
}

function contactReducer(state = initialState, action) {
    switch (action.type) {
        case contactAction.LOAD_CONTACT:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, contact: action.payload.contact }),
            });

        case contactAction.ADD_CONTACT:
            return {...state, contact: {}};

        case contactAction.SAVE_CONTACT:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, contacts: action.payload.contacts }),
            });

        case contactAction.REMOVE_CONTACT:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, contacts: action.payload.contacts }),
            });

    }
    return state;
}

export default contactReducer;