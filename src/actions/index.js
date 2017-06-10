import {SIGNED_IN} from '../constants.js';

export const logedIn = (email)=>{
  const action = {
    type: SIGNED_IN,
    payload: email
  }
  return action;
}
