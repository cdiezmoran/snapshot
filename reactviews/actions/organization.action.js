export const LOAD_ORGANIZATIONS = 'LOAD_ORGANIZATIONS';
export function loadOrganizations() {
  return {
    type: LOAD_ORGANIZATIONS,
    promise: fetch('/organization/getAll').then(response => { return  response.json() })
  };
}

export const FIND_ORGANIZATIONS = 'FIND_ORGANIZATIONS';
export function findOrganizations(name="") {
  return {
    type: FIND_ORGANIZATIONS,
    promise: fetch(`/organization/find?name=${name}`).then(response => { return  response.json() })
  };
}

export const LOAD_ORGANIZATION = 'LOAD_ORGANIZATION';
export function loadOrganization(id) {
  return {
    type: LOAD_ORGANIZATION,
    promise: fetch(`/organization/${id}`).then(response => { return  response.json() })
  };
}

export const SAVE_ORGANIZATION = 'SAVE_ORGANIZATION';
export function saveOrganization(data) {
  return {
    type: SAVE_ORGANIZATION,
    promise: fetch(`/organization/${data._id}`,{
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

export const CREATE_ORGANIZATION = 'CREATE_ORGANIZATION';
export function createOrganization(data) {
  return {
    type: CREATE_ORGANIZATION,
    promise: fetch('/organization/new',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST', 
      body: JSON.stringify( data )
    })
    .then(response => { return  response.json() })
  };
}

export const ADD_ORGANIZATION = 'ADD_ORGANIZATION';
export function addOrganization() {
  return {
    type: ADD_ORGANIZATION
  };
}

export const CHANGE_ORGANIZATION = 'CHANGE_ORGANIZATION';
export function changeOrganization(key,value) {
  return {
    type: CHANGE_ORGANIZATION,
    key, value
  };
}