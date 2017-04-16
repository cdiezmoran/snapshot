export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export const fetchContacts = (bool) => {
  return {
    type: FETCHING,
    fetching: bool
  }
}
