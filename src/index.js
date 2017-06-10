import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {firebaseApp} from './firebase.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {logedIn} from './actions';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './index.css';

const store = createStore(reducers);

firebaseApp.auth().onAuthStateChanged(user =>{
  if(user){
    console.log('user has signed in or up', user);
    store.dispatch(logedIn(user.email));
    browserHistory.push('/app');
  }else{
    console.log('user has signed out or still needs to sign in');
    browserHistory.push('/signIn');
  }
});

ReactDOM.render(
<Provider store={store}>
  <Router path="/" history={browserHistory}>
    <Route path="app" component={App}/>
    <Route path="signin" component={SignIn}/>
    <Route path="signup" component={SignUp}/>
</Router>
</Provider>, document.getElementById('root'));
