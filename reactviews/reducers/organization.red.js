import {LOAD_ORGANIZATIONS,LOAD_ORGANIZATION} from '../actions/organization.action'
import { handle } from 'redux-pack';

const initialState = {
    contacts: [],
    contact: null,
    error: null
}

function organizationReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ORGANIZATIONS:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: payload }),
                success: prevState => ({ ...prevState, organizations: payload }),
            });

        case LOAD_ORGANIZATION:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: payload }),
                success: prevState => ({ ...prevState, organization: payload }),
            });
    }
    return state;
}

export default organizationReducer;