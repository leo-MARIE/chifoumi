import React from 'react';

function Score(props) {
  return (
<div id="score">
    <div>Opponent Score is {props.score.oppScore} </div>
    <div>My Score is {props.score.myScore} </div>
</div>
  );
}

export default Score;