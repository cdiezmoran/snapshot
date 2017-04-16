export const LOAD_ORGANIZATIONS = 'LOAD_ORGANIZATIONS';
export function loadOrganizations() {
  return {
    type: LOAD_ORGANIZATIONS,
    promise: fetch('/organization/getAll').then(response => { return  response.json() })
  };
}

export const LOAD_ORGANIZATION = 'LOAD_ORGANIZATION';
export function loadOrganization(id) {
  return {
    type: LOAD_ORGANIZATION,
    promise: fetch('/organization/:id').then(response => { return  response.json() })
  };
}