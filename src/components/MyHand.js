import React from 'react';

function MyHand(props) {


  return (
  <div className="hand" id="myHand">
    <div>
      <button className="buttons" id="rockbutton" value="rock" onClick={props.updateSign}></button>
      <br/>
      <div>Rock</div>
    </div>
    <div>
      <button className="buttons" id="paperbutton" value="paper" onClick={props.updateSign}></button>
      <div>Paper</div>
    </div>
    <div>
      <button className="buttons" id="scissorsbutton" value="scissors" onClick={props.updateSign}></button>
      <div>Scissors</div>
    </div>
  </div>
  );
}

export default MyHand;