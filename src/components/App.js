import React from 'react';
import {firebaseApp} from '../firebase';

class App extends React.Component{
  signOut(){
    firebaseApp.auth().signOut();
  }
  render(){
    return (
      <div>
        <button
          className="btn btn-warning"
          onClick={this.signOut.bind(this)}>
          Sign Out
        </button>
      </div>
    )
  }
}

export default App;
