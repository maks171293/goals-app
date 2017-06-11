import {SIGNED_IN, SET_GOALS, SET_COMPLETED} from '../constants.js';

export const logedIn = (email)=>{
  const action = {
    type: SIGNED_IN,
    payload: email
  }
  return action;
}

export const setGoals = (goals)=>{
  const action = {
    type: SET_GOALS,
    payload: goals
  }
  return action;
}

export const setCompleted = (completedGoals)=>{
  const action = {
    type: SET_COMPLETED,
    payload: completedGoals
  }
  return action;
}
