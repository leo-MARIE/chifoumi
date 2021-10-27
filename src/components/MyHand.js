import React from 'react';

function MyHand(props) {


  return (
  <div className="hand" id="myHand">
    <button className="buttons" id="rockbutton" value="rock" onClick={props.updateSign}></button>
    <button className="buttons" id="paperbutton" value="paper" onClick={props.updateSign}></button>
    <button className="buttons" id="scissorsbutton" value="scissors" onClick={props.updateSign}></button>
  </div>
  );
}

export default MyHand;