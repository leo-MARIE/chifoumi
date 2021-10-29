import React from 'react';

function MyHand(props) {


  return (
  <div className="hand" id="myHand">
    <div>
      <button className="buttons" id="rockbutton" value="rock" aria-label="rock" onClick={props.updateSign}></button>
      <br/>
      <div>Rock</div>
    </div>
    <div>
      <button className="buttons" id="paperbutton" value="paper" aria-label="paper" onClick={props.updateSign}></button>
      <div>Paper</div>
    </div>
    <div>
      <button className="buttons" id="scissorsbutton" value="scissors" aria-label="scissors" onClick={props.updateSign}></button>
      <div>Scissors</div>
    </div>
  </div>
  );
}

export default MyHand;