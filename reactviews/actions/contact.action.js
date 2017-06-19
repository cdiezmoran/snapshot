export const FETCH_CONTACTS_BY_PERSON = 'FETCH_CONTACTS_BY_PERSON'
export const fetchContactsByPerson = (id) => {
  return {
    type: FETCH_CONTACTS_BY_PERSON,
    promise: fetch(`/contact/person/${id}`)
    .then(response => { 
      return  response.json() 
    })
  }
}

export const LOAD_CONTACT = 'LOAD_CONTACT';
export function loadContact(id) {
  return {
    type: LOAD_CONTACT,
    promise: fetch(`/contact/${id}`).then(response => { return  response.json() })
  };
}

export const ADD_CONTACT = 'ADD_CONTACT';
export function addContact() {
  return {
    type: ADD_CONTACT
  };
}

export const CREATE_CONTACT = 'CREATE_CONTACT';
export function createContact(contact) {
  return {
    type: CREATE_CONTACT,
    promise: fetch(`/contact`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST', 
      body: JSON.stringify( contact )
    })
    .then(response => { return  response.json() })
    
  };
}

export const SAVE_CONTACT = 'SAVE_CONTACT';
export function saveContact(contact) {
  return {
    type: SAVE_CONTACT,
    promise: fetch(`/contact/${contact._id}`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT', 
      body: JSON.stringify( contact )
    })
    .then(response => { return  response.json() })
    
  };
}

export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export function removeContact(id) {
  return {
    type: REMOVE_CONTACT,
    promise: fetch(`/contact/${id}`,{method: 'DELETE'}).then(response => { return  response.json() })
  };
}
