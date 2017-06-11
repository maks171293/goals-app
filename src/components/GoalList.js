import React from 'react';
import {goalRef} from '../firebase';
import {connect} from 'react-redux';
import {setGoals} from '../actions';
import GoalItem from './GoalItem';

class GoalList extends React.Component{
  componentDidMount(){
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal=>{
        const {email, title} = goal.val();
        const serverKey = goal.key;
        goals.push({email, title, serverKey});
      });
      this.props.setGoals(goals);
    })
  }
  render(){
    return (
      <div>
        <ul className='list-group'>
        {
          this.props.goals.map((goal, index)=>{
            return (
              <GoalItem key={index} goal={goal} />
            )
          })
        }
      </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    goals: state.goals
  }
}

export default connect(mapStateToProps, {setGoals})(GoalList);
