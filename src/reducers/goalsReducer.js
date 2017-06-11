import {SET_GOALS} from '../constants';

export default (state=[], action)=>{
  switch(action.type){
    case SET_GOALS:
      return action.payload;
    default:
      return state;
  }
}
