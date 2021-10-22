import React from 'react';

function MyHand(props) {


  return (
  <div>
    <div>My Hand</div>
    <button id="rockbutton" value="rock" onClick={props.updateSign}>Rock</button>
    <button id="paperbutton" value="paper" onClick={props.updateSign}>Paper</button>
    <button id="scissorsbutton" value="scissors" onClick={props.updateSign}>Scissors</button>
  </div>
  );
}

export default MyHand;