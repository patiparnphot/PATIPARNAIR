import axios from 'axios';


//AIRCONDITIONER list
export const FETCH_AIRCONDITIONERS = 'FETCH_AIRCONDITIONERS';
export const FETCH_AIRCONDITIONERS_SUCCESS = 'FETCH_AIRCONDITIONERS_SUCCESS';
export const FETCH_AIRCONDITIONERS_FAILURE = 'FETCH_AIRCONDITIONERS_FAILURE';
export const RESET_AIRCONDITIONERS = 'RESET_AIRCONDITIONERS';

//Create new AIRCONDITIONER
export const CREATE_AIRCONDITIONER = 'CREATE_AIRCONDITIONER';
export const CREATE_AIRCONDITIONER_SUCCESS = 'CREATE_AIRCONDITIONER_SUCCESS';
export const CREATE_AIRCONDITIONER_FAILURE = 'CREATE_AIRCONDITIONER_FAILURE';
export const RESET_NEW_AIRCONDITIONER = 'RESET_NEW_AIRCONDITIONER';

//Fetch AIRCONDITIONER
export const FETCH_AIRCONDITIONER = 'FETCH_AIRCONDITIONER';
export const FETCH_AIRCONDITIONER_SUCCESS = 'FETCH_AIRCONDITIONER_SUCCESS';
export const FETCH_AIRCONDITIONER_FAILURE = 'FETCH_AIRCONDITIONER_FAILURE';
export const RESET_ACTIVE_AIRCONDITIONER = 'RESET_ACTIVE_AIRCONDITIONER';

//Delete AIRCONDITIONER
export const DELETE_AIRCONDITIONER = 'DELETE_AIRCONDITIONER';
export const DELETE_AIRCONDITIONER_SUCCESS = 'DELETE_AIRCONDITIONER_SUCCESS';
export const DELETE_AIRCONDITIONER_FAILURE = 'DELETE_AIRCONDITIONER_FAILURE';
export const RESET_DELETED_AIRCONDITIONER = 'RESET_DELETED_AIRCONDITIONER';


const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost/api' : '/api';
export function fetchAirConditioners() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/airConditioners.php`,
    headers: []
  });
  return {
    type: FETCH_AIRCONDITIONERS,
    payload: request
  };
}
export function fetchAirConditionersSuccess(AirConditioners) {
  return {
    type: FETCH_AIRCONDITIONERS_SUCCESS,
    payload: AirConditioners
  };
}
export function fetchAirConditionersFailure(error) {
  return {
    type: FETCH_AIRCONDITIONERS_FAILURE,
    payload: error
  };
}


export function createAirConditioner(props) {
  const request = axios.post(`${ROOT_URL}/createAirConditioner.php`, props);
  return {
    type: CREATE_AIRCONDITIONER,
    payload: request
  };
}
export function createAirConditionerSuccess(newAirConditioner) {
  return {
    type: CREATE_AIRCONDITIONER_SUCCESS,
    payload: newAirConditioner
  };
}
export function createAirConditionerFailure(error) {
  return {
    type: CREATE_AIRCONDITIONER_FAILURE,
    payload: error
  };
}
export function resetNewAirConditioner() {
  return {
    type: RESET_NEW_AIRCONDITIONER
  }
}


export function fetchAirConditioner(id) {
  const request = axios.get(`${ROOT_URL}/airConditioner.php?id="${id}"`);
  return {
    type: FETCH_AIRCONDITIONER,
    payload: request
  };
}
export function fetchAirConditionerSuccess(activeAirConditioner) {
  return {
    type: FETCH_AIRCONDITIONER_SUCCESS,
    payload: activeAirConditioner
  };
}
export function fetchAirConditionerFailure(error) {
  return {
    type: FETCH_AIRCONDITIONER_FAILURE,
    payload: error
  };
}
export function resetActiveAirConditioner() {
  return {
    type: RESET_ACTIVE_AIRCONDITIONER
  }
}


export function deleteAirConditioner(id) {
  const request = axios.get(`${ROOT_URL}/deleteAirConditioner.php?id="${id}"`);
  return {
    type: DELETE_AIRCONDITIONER,
    payload: request
  };
}
export function deleteAirConditionerSuccess(deletedAirConditioner) {
  return {
    type: DELETE_AIRCONDITIONER_SUCCESS,
    payload: deletedAirConditioner
  };
}
export function deleteAirConditionerFailure(response) {
  return {
    type: DELETE_AIRCONDITIONER_FAILURE,
    payload: response
  };
}
export function resetDeletedAirConditioner() {
  return {
    type: RESET_DELETED_AIRCONDITIONER
  };
}