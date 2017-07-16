export const LOAD_LOCATIONS = 'LOAD_LOCATIONS';
export function loadLocations() {
	return {
		type: LOAD_LOCATIONS,
		promise: fetch('/location/getAll').then(response => { return  response.json() })
	};
}

export const LOAD_LOCATION = 'LOAD_LOCATION';
export function loadLocation(id) {
  return {
    type: LOAD_LOCATION,
    promise: fetch(`/location/${id}`).then(response => { return  response.json() })
  };
}

export const SAVE_LOCATION = 'SAVE_LOCATION';
export function saveLocation(data) {
  return {
    type: SAVE_LOCATION,
    promise: fetch(`/location/${data._id}`,{
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

export const CREATE_LOCATION = 'CREATE_LOCATION';
export function createLocation(data) {
  return {
    type: CREATE_LOCATION,
    promise: fetch('/location/new',{
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

export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export function changeLocation(key,value) {
  return {
    type: CHANGE_LOCATION,
    key, value
  };
}

export const ADD_LOCATION = 'ADD_LOCATION';
export function addLocation() {
  return {
    type: ADD_LOCATION
  };
}

