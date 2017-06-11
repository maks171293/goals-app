import React from 'react';
import {completeGoalRef} from '../firebase';
import {connect} from 'react-redux';
import {setCompleted} from '../actions';
import CompleteGoalItem from './CompleteGoalItem';

class CompleteGoalsList extends React.Component{
  componentDidMount(){
    completeGoalRef.on('value', snap=>{
      let completedGoals = [];
      snap.forEach((goal)=>{
        const {email, title} = goal.val();
        completedGoals.push({email,title})
      });
      this.props.setCompleted(completedGoals);
    })
  }
  clearCompleted(){
    completeGoalRef.set([]);
  }
  render(){
    return(
      <div>
        <ul className="list-group">
          {
            this.props.completedGoals.map((goal, index)=>{
              return (
                <CompleteGoalItem goal={goal} key={index} />
              )
            })
          }
        </ul>
        <button
          className="btn btn-danger"
          onClick={()=>this.clearCompleted()}>
          Очистить Список
        </button>
      </div>)
  }
}

function mapStateToProps(state){
  return {
    completedGoals: state.completedGoals
  }
}

export default connect(mapStateToProps,{setCompleted})(CompleteGoalsList);
