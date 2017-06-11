import {SIGNED_IN} from '../constants.js';

function logInReducer(state={email: ''}, action){
  switch(action.type){
    case SIGNED_IN:
      return {...state, email: action.payload};
    default:
      return state;
  }
}

export default logInReducer;
