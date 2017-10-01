import {LOAD_INTERACTIONS,LOAD_INTERACTION, CHANGE_INTERACTION,
    ADD_INTERACTION, SAVE_INTERACTION, CREATE_INTERACTION,
    FIND_INTERACTIONS} from '../actions/interaction.action'
import { handle } from 'redux-pack';

const initialState = {
interactions: [],
contacts: [],
locations: [],
findInteractions: [],
interaction: null,
error: null
}

function interactionReducer(state = initialState, action) {
switch (action.type) {
    case LOAD_INTERACTIONS:
        return handle(state, action, {
            failure: prevState => ({ ...prevState, error: action.payload }),
            success: prevState => ({ ...prevState, interaction: null, interactions: action.payload }),
        });
    
    case FIND_INTERACTIONS:
        return handle(state, action, {
            failure: prevState => ({ ...prevState, error: action.payload }),
            success: prevState => ({ ...prevState, findInteractions: action.payload }),
        });

    case LOAD_INTERACTION:
        return handle(state, action, {
            failure: prevState => ({ ...prevState, error: action.payload }),
            success: prevState => ({ ...prevState, interaction: action.payload.interaction, 
                contacts: action.payload.interaction.contacts, 
                location: action.payload.interaction.location 
            }),
        });
    
    case SAVE_INTERACTION:
        return handle(state, action, {
            failure: prevState => ({ ...prevState, error: action.payload }),
            success: prevState => ({ ...prevState, interaction: action.payload }),
        });
     case CREATE_INTERACTION:
        return handle(state, action, {
            failure: prevState => ({ ...prevState, error: action.payload }),
            success: prevState => ({ ...prevState, interaction: action.payload }),
        });
    case ADD_INTERACTION:
        let neworg={};
        return {...state, 
                interaction: neworg, 
                interactions: state.interactions.concat(neworg) 
            };
    case CHANGE_INTERACTION:
        let org = state.interaction;
        org[action.key]=action.value
        return {...state, interaction: {...org}}
}
return state;
}

export default interactionReducer;