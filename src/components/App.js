import React from 'react';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalsList from './CompleteGoalsList';

class App extends React.Component{
  signOut(){
    firebaseApp.auth().signOut();
  }
  render(){
    return (
      <div style={{margin:'5%'}}>
        <h3>Список Задач</h3>
        <AddGoal />
        <hr/>
        <h3>Задачи</h3>
        <GoalList />
        <hr/>
        <h3>Выполненые задачи</h3>
        <CompleteGoalsList />
        <hr/>
        <button
          className="btn btn-warning"
          onClick={this.signOut.bind(this)}>
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    email: state.user.email
  }
}

export default connect(mapStateToProps, null)(App);
