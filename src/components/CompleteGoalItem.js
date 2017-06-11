import React from 'react';

class CompleteGoalItem extends React.Component{
  render(){
    return(
      <li className="list-group-item" style={{textAlign:'center'}}>
        <strong><span style={{color: 'green', marginRight: '5px'}}>&#10004;</span>{this.props.goal.title}</strong>
        <i style={{marginLeft:'10px', fontSize: '10px'}}>Выполнил:{this.props.goal.email}</i>
      </li>
    )
  }
}

export default CompleteGoalItem;
