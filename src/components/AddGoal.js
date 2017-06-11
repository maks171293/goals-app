import React from 'react';
import {goalRef} from '../firebase';
import {connect} from 'react-redux';

class AddGoal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      goal: ''
    }
  }
  addGoal(){
    console.log(this.state)
    goalRef.push({
      email: this.props.email,
      title: this.state.title
    })
  }
  render(){
    return(
      <div className='form-inline'>
        <div className='form-group'>
          <input
            className='form-control'
            type="text"
            placeholder="Новая задача.."
            onChange={event=>this.setState({title: event.target.value})}
          />
          <button
            className="btn btn-success"
            onClick={this.addGoal.bind(this)}
            >
            Создать задачу
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    email: state.user.email
  }
}

export default connect(mapStateToProps, null)(AddGoal);
