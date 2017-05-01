import {LOAD_PERSON, LOAD_PERSONS, SAVE_PERSON, CREATE_PERSON, ADD_PERSON, 
        CHANGE_PERSON, LOAD_PERSON_ORGANIZATION,
        ADD_ORGANIZATION_FROM_PERSON,REMOVE_ORGANIZATION_FROM_PERSON} from '../actions/person.action'
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
                success: prevState => ({ ...prevState, people: action.payload }),
            });

        case LOAD_PERSON:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, person: action.payload }),
            });

        case SAVE_PERSON:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, person: null }),
            });

        case CREATE_PERSON:
            return handle(state, action, {
                failure: prevState => ({ ...prevState, error: action.payload }),
                success: prevState => ({ ...prevState, person: null }),
            });

        case ADD_PERSON:
            let newPerson={};
            return {...state, 
                    person: newPerson 
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

        case ADD_ORGANIZATION_FROM_PERSON:
            let personAdd = {...state.person};
            personAdd.currentOrganizations.push(action.organization);
            return {...state, person: personAdd };

        case REMOVE_ORGANIZATION_FROM_PERSON:
            let person = {...state.person};
            person.currentOrganizations = person.currentOrganizations.filter(o=> {
                return o._id !== action.organization._id
            });
            return {...state, person: person };
    }
    return state;
}

export default personReducer;