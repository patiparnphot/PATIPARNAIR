import { combineReducers } from 'redux';
import AirConditionersReducer from './reducer_airConditioners';
// import MemberReducer from './reducer_user';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  airConditioners: AirConditionersReducer, //<-- AirConditioners
  // member: MemberReducer, //<-- user
  form: formReducer // <-- redux-form
});

export default rootReducer;