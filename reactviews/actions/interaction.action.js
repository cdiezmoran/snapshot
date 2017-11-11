export const LOAD_INTERACTIONS = 'LOAD_INTERACTIONS';
export function loadInteractions() {
  return {
    type: LOAD_INTERACTIONS,
    promise: fetch('/interaction/getAll').then(response => { return  response.json() })
  };
}

export const FIND_INTERACTIONS = 'FIND_INTERACTIONS';
export function findInteractions(name="") {
  return {
    type: FIND_INTERACTIONS,
    promise: fetch(`/interaction/find?name=${name}`).then(response => { return  response.json() })
  };
}

export const LOAD_INTERACTION = 'LOAD_INTERACTION';
export function loadInteraction(id) {
  return {
    type: LOAD_INTERACTION,
    promise: fetch(`/interaction/${id}`).then(response => { return  response.json() })
  };
}

export const SAVE_INTERACTION = 'SAVE_INTERACTION';
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

export const CREATE_INTERACTION = 'CREATE_INTERACTION';
export function createInteraction(data) {
  return {
    type: CREATE_INTERACTION,
    promise: fetch('/interaction/new',{
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

export const ADD_INTERACTION = 'ADD_INTERACTION';
export function addInteraction() {
  return {
    type: ADD_INTERACTION
  };
}

export const CHANGE_INTERACTION = 'CHANGE_INTERACTION';
export function changeInteraction(key,value) {
  return {
    type: CHANGE_INTERACTION,
    key, value
  };
}