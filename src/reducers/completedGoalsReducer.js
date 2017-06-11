import {SET_COMPLETED} from '../constants';

export default (state = [], action)=>{
  switch(action.type){
    case SET_COMPLETED:
      return action.payload;
    default:
    return state;
  }
};
