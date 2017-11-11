export const FETCH_CONTACTS_BY_PERSON = 'FETCH_CONTACTS_BY_PERSON'
export const FIND_CONTACTS = 'FIND_CONTACTS';
export const LOAD_CONTACT = 'LOAD_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const CREATE_CONTACT = 'CREATE_CONTACT';
export const SAVE_CONTACT = 'SAVE_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const CHANGE_CONTACT = 'CHANGE_CONTACT';
export const LOAD_INTERACTIONS = 'LOAD_INTERACTIONS';
export const LOAD_INTERACTION = 'LOAD_INTERACTION';
export const SAVE_INTERACTION = 'SAVE_INTERACTION';
export const ADD_INTERACTION = 'ADD_INTERACTION';
export const CHANGE_INTERACTION = 'CHANGE_INTERACTION';

const data_types = ['CONTACT', 'INTERACTION'];
const action_types = ['FIND', 'LOAD', 'ADD', 'CREATE', 'SAVE', 'REMOVE', 'CHANGE']



export function loadInteractions() {
  return {
    type: LOAD_INTERACTIONS,
    promise: fetch('/interaction/getAll').then(response => { return  response.json() })
  };
}

export function findInteractions(name="") {
  return {
    type: FIND_INTERACTIONS,
    promise: fetch(`/interaction/find?name=${name}`).then(response => { return  response.json() })
  };
}

export function loadInteraction(id) {
  return {
    type: LOAD_INTERACTION,
    promise: fetch(`/interaction/${id}`).then(response => { return  response.json() })
  };
}

export function saveInteraction(data) {
  return {
    type: SAVE_INTERACTION,
    promise: fetch(`/interaction/${data._id}`,{
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

export function addInteraction() {
  return {
    type: ADD_INTERACTION
  };
}

export function changeInteraction(key,value) {
  return {
    type: CHANGE_INTERACTION,
    key, value
  };
}


export const fetchContactsByPerson = (id) => {
  return {
    type: FETCH_CONTACTS_BY_PERSON,
    promise: fetch(`/contact/person/${id}`)
    .then(response => {
      return  response.json()
    })
  }
}

export function findContacts(email="") {
  return {
    type: FIND_CONTACTS,
    promise: fetch(`/contact/find?email=${email}`).then(response => { return  response.json() })
  };
}

export function loadContact(id) {
  return {
    type: LOAD_CONTACT,
    promise: fetch(`/contact/${id}`).then(response => { return  response.json() })
  };
}

export function addContact(person) {
  return {
    type: ADD_CONTACT,
    person
  };
}

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

export function removeContact(id) {
  return {
    type: REMOVE_CONTACT,
    promise: fetch(`/contact/${id}`,{method: 'DELETE'}).then(response => { return  response.json() })
  };
}

export function changeContact(key,value) {
  return {
    type: CHANGE_CONTACT,
    key, value
  };
}
