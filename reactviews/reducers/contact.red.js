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

    }
    return state;
}

export default contactReducer;