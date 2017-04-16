require('es6-promise').polyfill();
require('isomorphic-fetch');
 

export const LOAD_PERSON = 'LOAD_PERSON';
export function loadPerson() {
  return {
    type: LOAD_PERSON,
    promise: fetch('/person/getAll').then(response => { return  response.json() })
  };
}

export const LOAD_PERSON_ORGANIZATION = 'LOAD_PERSON_ORGANIZATION';
export function loadPersonOrganization(organization) {
  return {
    type: LOAD_LOAD_PERSON_ORGANIZATIONPERSON,
    promise: fetch('/person/organization/:organization').then(response => { return  response.json() })
  };
}
