import {combineReducers} from 'redux';
import UserReducer from './userReducer';
import GoalsReducer from './goalsReducer';
import CompletedGoals from './completedGoalsReducer.js';

const reducers = combineReducers({
  user: UserReducer,
  goals: GoalsReducer,
  completedGoals: CompletedGoals
})

export default reducers;
