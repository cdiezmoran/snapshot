export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export const fetchContacts = (bool) => {
  return {
    type: FETCHING,
    fetching: bool
  }
}

export const LOAD_CONTACT = 'LOAD_CONTACT';
export function loadContact(id) {
  return {
    type: LOAD_CONTACT,
    promise: fetch(`/contact/${id}`).then(response => { return  response.json() })
  };
}
