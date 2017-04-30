import {LOAD_PERSON, LOAD_PERSONS, SAVE_PERSON, CREATE_PERSON, ADD_PERSON, CHANGE_PERSON, LOAD_PERSON_ORGANIZATION, } from '../actions/person.action'
import { handle } from 'redux-pack';

const initialState = {
    persons: [],
    person: null,
    error: null
}


function personReducer(state = initialState, action) {
    switch (action.type) {

        case LOAD_PERSONS:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, person: action.payload }),
            });

        case LOAD_PERSON:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, person: action.payload }),
            });

        case SAVE_PERSON:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, people: action.payload }),
            });

        case CREATE_PERSON:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, people: action.payload }),
            });

        case ADD_PERSON:
            let newPerson={};
            return {...state, 
                    organization: newPerson, 
                    organizations: state.organizations.concat(newPerson) 
                };                                    

        case LOAD_PERSON_ORGANIZATION:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, peopleOrganization: action.payload }),
            });

        case CHANGE_PERSON:
            let personObj = state.person;
            personObj[action.key]=action.value
            return {...state, person: {...personObj}}
    }
    return state;
}

export default personReducer;