import React from 'react';

function MyHand(props) {


  return (
  <div className="hand" id="myHand">
    <div>My Hand</div>
    <button id="rockbutton" value="rock" onClick={props.updateSign}></button>
    <button id="paperbutton" value="paper" onClick={props.updateSign}></button>
    <button id="scissorsbutton" value="scissors" onClick={props.updateSign}></button>
  </div>
  );
}

export default MyHand;