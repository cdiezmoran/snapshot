import {LOAD_LOCATION, LOAD_LOCATIONS, SAVE_LOCATION, CHANGE_PERSON, 
        CREATE_LOCATION, ADD_LOCATION, CHANGE_LOCATION, FIND_LOCATIONS } from '../actions/location.action'
import { handle } from 'redux-pack';

const initialState = {
    locations: [],
    location: null,
    tab: 'info',
    error: null,
    findLocations: []
}


function locationReducer(state = initialState, action) {
    switch (action.type) {

        case LOAD_LOCATIONS:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, locations: action.payload }),
            });

        case LOAD_LOCATION:
            if (action.payload && !action.payload.birthDate) action.payload.birthDate = ""
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, location: action.payload }),
            });

        case SAVE_LOCATION:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => {
                    return { ...prevState, location: null }
                },
            });

        case CHANGE_PERSON:
            let personObj = state.person;
            personObj[action.key]=action.value
            return {...state, person: {...personObj}}

        case CREATE_LOCATION:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => { 
                    return { ...prevState, location: null }
                },
            });

        case CHANGE_LOCATION:
            state.location[action.key] = action.value
            return {...state, 
                location: {...state.location} 
            };
    

        case ADD_LOCATION:
            let newLocation={};
            return {...state, 
                    location: newLocation 
                };       
                
        case FIND_LOCATIONS:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, findContacts: action.payload }),
            });

    }
    return state;
}

export default locationReducer;