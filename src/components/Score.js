import React from 'react';

function Score(props) {
  return (
<div id="score">
    <div>Computer Score : </div>
    <br/>
    <br/>
    <div className="scoreNumber">{props.score.oppScore}</div>
    <br/>
    <br/>
    <div>Your Score : </div>
    <br/>
    <br/>
    <div className="scoreNumber">{props.score.myScore}</div>
</div>
  );
}

export default Score;