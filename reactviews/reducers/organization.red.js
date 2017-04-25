import {LOAD_ORGANIZATIONS,LOAD_ORGANIZATION,
        ADD_ORGANIZATION, SAVE_ORGANIZATION, CREATE_ORGANIZATION} from '../actions/organization.action'
import { handle } from 'redux-pack';

const initialState = {
    organizations: [],
    organization: null,
    error: null
}

function organizationReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ORGANIZATIONS:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, organizations: action.payload }),
            });

        case LOAD_ORGANIZATION:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, organization: action.payload }),
            });
        
        case SAVE_ORGANIZATION:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, organization: action.payload }),
            });
         case CREATE_ORGANIZATION:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, organization: action.payload }),
            });
        case ADD_ORGANIZATION:
            let neworg={};
            return {...state, 
                    organization: neworg, 
                    organizations: state.organizations.concat(neworg) 
                };
    }
    return state;
}

export default organizationReducer;