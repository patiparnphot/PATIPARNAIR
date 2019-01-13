import {
  FETCH_AIRCONDITIONERS, FETCH_AIRCONDITIONERS_SUCCESS, FETCH_AIRCONDITIONERS_FAILURE, RESET_AIRCONDITIONERS,
	FETCH_AIRCONDITIONER, FETCH_AIRCONDITIONER_SUCCESS,  FETCH_AIRCONDITIONER_FAILURE, RESET_ACTIVE_AIRCONDITIONER,
	CREATE_AIRCONDITIONER, CREATE_AIRCONDITIONER_SUCCESS, CREATE_AIRCONDITIONER_FAILURE, RESET_NEW_AIRCONDITIONER,
	DELETE_AIRCONDITIONER, DELETE_AIRCONDITIONER_SUCCESS, DELETE_AIRCONDITIONER_FAILURE, RESET_DELETED_AIRCONDITIONER
} from '../actions/airConditioners';


	const INITIAL_STATE = {
    airConditionerList: {
      airConditioners: [],
      error: null,
      loading: false
    },
    newAirConditioner: {
      airConditioner: null,
      error: null,
      loading: false
    },
    activeAirConditioner: {
      airConditioner: null,
      error: null,
      loading: false
    },
    deletedAirConditioner: {
      airConditioner: null,
      error: null,
      loading: false
    }
  };

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_AIRCONDITIONERS:
  	return { ...state, airConditionerList: {airConditioners:[], error: null, loading: true} }; 
  case FETCH_AIRCONDITIONERS_SUCCESS:
    return { ...state, airConditionerList: {airConditioners: action.payload, error:null, loading: false} };
  case FETCH_AIRCONDITIONERS_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, airConditionerList: {airConditioners: [], error: error, loading: false} };
  case RESET_AIRCONDITIONERS:
    return { ...state, airConditionerList: {airConditioners: [], error:null, loading: false} };

  case FETCH_AIRCONDITIONER:
    return { ...state, activeAirConditioner: {...state.activeAirConditioner, loading: true}};
  case FETCH_AIRCONDITIONER_SUCCESS:
    return { ...state, activeAirConditioner: {airConditioner: action.payload, error:null, loading: false}};
  case FETCH_AIRCONDITIONER_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, activeAirConditioner: {airConditioner: null, error:error, loading:false}};
  case RESET_ACTIVE_AIRCONDITIONER:
    return { ...state, activeAirConditioner: {airConditioner: null, error:null, loading: false}};

  case CREATE_AIRCONDITIONER:
  	return {...state, newAirConditioner: {...state.newAirConditioner, loading: true}};
  case CREATE_AIRCONDITIONER_SUCCESS:
  	return {...state, newAirConditioner: {airConditioner:action.payload, error:null, loading: false}};
  case CREATE_AIRCONDITIONER_FAILURE:
    error = action.payload || {message: action.payload.message};
  	return {...state, newAirConditioner: {airConditioner:null, error:error, loading: false}};
  case RESET_NEW_AIRCONDITIONER:
  	return {...state, newAirConditioner: {airConditioner:null, error:null, loading: false}};

  case DELETE_AIRCONDITIONER:
   	return {...state, deletedAirConditioner: {...state.deletedAirConditioner, loading: true}};
  case DELETE_AIRCONDITIONER_SUCCESS:
  	return {...state, deletedAirConditioner: {airConditioner:action.payload, error:null, loading: false}};
  case DELETE_AIRCONDITIONER_FAILURE:
    error = action.payload || {message: action.payload.message};
  	return {...state, deletedAirConditioner: {airConditioner:null, error:error, loading: false}};
  case RESET_DELETED_AIRCONDITIONER:
  	return {...state, deletedAirConditioner: {airConditioner:null, error:null, loading: false}};

  default:
    return state;
  }
}

