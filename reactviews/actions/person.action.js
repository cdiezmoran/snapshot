require('es6-promise').polyfill();
require('isomorphic-fetch');
 

export const LOAD_PERSON = 'LOAD_PERSON';
export function loadPerson() {
  return {
    type: LOAD_PERSON,
    promise: fetch('/person/getAll')
  };
}

export function loadPersonApi() {
    return dispatch => {
        fetch('/person/getAll')
        .then(response => {
            return response.json()
        })
        .then(contactsList=>{
            dispatch( loadPersonSuccess(contactsList) )
        });
    }
}

export const LOAD_PERSON_SUCCESS = 'LOAD_PERSON_SUCCESS';
export function loadPersonSuccess(contacts) {
  return {
    type: LOAD_PERSON_SUCCESS,
    contacts: contacts
  };
}
