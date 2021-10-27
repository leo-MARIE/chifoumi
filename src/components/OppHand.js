import React from 'react';

function OppHand() {
  return (
    <div className="hand" id="oppHand">
    <div>Opponent Hand</div>
    <button id="rockbutton" value="rock"></button>
    <button id="paperbutton" value="paper"></button>
    <button id="scissorsbutton" value="scissors"></button>
  </div>
  );
}

export default OppHand;