export const LOAD_PERSONS = 'LOAD_PERSONS';
export function loadPersons() {
	return {
		type: LOAD_PERSONS,
		promise: fetch('/person/getAll').then(response => { return  response.json() })
	};
}

export const LOAD_PERSON = 'LOAD_PERSON';
export function loadPerson(id) {
  return {
    type: LOAD_PERSON,
    promise: fetch(`/person/${id}`).then(response => { return  response.json() })
  };
}

export const SAVE_PERSON = 'SAVE_PERSON';
export function savePerson(data) {
  return {
    type: SAVE_PERSON,
    promise: fetch(`/person/${data._id}`,{
      method: 'PUT', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( data )
    })
    .then(response => { return  response.json() })
  };
}

export const CREATE_PERSON = 'CREATE_PERSON';
export function createPerson(data) {
  return {
    type: CREATE_PERSON,
    promise: fetch('/person/new',{
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( data )
    })
    .then(response => { return  response.json() })
  };
}

export const ADD_PERSON = 'ADD_PERSON';
export function addPerson() {
  return {
    type: ADD_PERSON
  };
}

export const SET_TAB_FOR_PERSON = 'SET_TAB_FOR_PERSON';
export function setTabForPerson(tab) {
  return {
    type: SET_TAB_FOR_PERSON,
    tab
  };
}

export const CHANGE_PERSON = 'CHANGE_PERSON';
export function changePerson(key,value) {
  return {
    type: CHANGE_PERSON,
    key, value
  };
}

export const LOAD_PERSON_ORGANIZATION = 'LOAD_PERSON_ORGANIZATION';
export function loadPersonOrganization(organization) {
  return {
    type: LOAD_LOAD_PERSON_ORGANIZATIONPERSON,
    promise: fetch('/person/organization/:organization').then(response => { return  response.json() })
  };
}


export const ADD_ORGANIZATION_FROM_PERSON = 'ADD_ORGANIZATION_FROM_PERSON';
export function addOrganizationFromPerson(organization) {
	return {
		type: ADD_ORGANIZATION_FROM_PERSON,
		organization: organization
	};
}

export const REMOVE_ORGANIZATION_FROM_PERSON = 'REMOVE_ORGANIZATION_FROM_PERSON';
export function removeOrganizationFromPerson(organization) {
	return {
		type: REMOVE_ORGANIZATION_FROM_PERSON,
		organization: organization
	};
}
