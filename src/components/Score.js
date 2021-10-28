import React from 'react';

function Score(props) {
  return (
<div id="score">
    <div>Computer Score : </div>
    <br/>
    <div className="scoreNumber">{props.score.oppScore}</div>
    <br/>
    <div>Your Score : </div>
    <br/>
    <div className="scoreNumber">{props.score.myScore}</div>
</div>
  );
}

export default Score;