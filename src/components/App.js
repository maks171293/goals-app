import React from 'react';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends React.Component{
  signOut(){
    firebaseApp.auth().signOut();
  }
  render(){
    return (
      <div>
        <h3>Задачи</h3>
        <AddGoal />
        <GoalList />
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
    email: state.email
  }
}

export default connect(mapStateToProps, null)(App);
