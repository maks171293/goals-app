import React from 'react';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';

class GoalItem extends React.Component{

completedGoal(){
  const {email} = this.props.user;
  const {title, serverKey} = this.props.goal;
  completeGoalRef.push({email, title});
  goalRef.child(serverKey).remove();
  console.log({email,title})
}

  render(){
    return(
      <li className='list-group-item' style={{textAlign: 'center'}} >
        <strong><span style={{color:'red', marginRight:'5px'}}>&#10137;</span>{this.props.goal.title}</strong>
        <i style={{fontSize: '10px', marginLeft: '10px'}}>Задача от: {this.props.goal.email}</i>
        <button
          style={{marginLeft:'10px'}}
          className="btn btn-sm btn-primary"
          onClick={()=>this.completedGoal()}
          >
            Готово
          </button>
      </li>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(GoalItem);
