import React from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signIn(){
    console.log(this.state)
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email,password)
      .catch(error =>{
        this.setState({error})
      })
  }
  render(){
    return (
      <div className='form-inline' style={{margin: '5%'}}>
        <h2>Sign In</h2>
        <div className='form-group'>
          <input
            className='form-control'
            type='email'
            placeholder='email'
            onChange={event=>this.setState({email:event.target.value})}
          />
          <input
            className='form-control'
            type='password'
            placeholder='password'
            onChange={event=>this.setState({password: event.target.value})}
          />
          <button
            className='btn btn-primary'
            onClick={this.signIn.bind(this)}
            >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div style={{marginTop: '10px'}}><Link to='/signUp'>Sign Up Instead</Link></div>
      </div>
    )
  }
}

export default SignIn;
