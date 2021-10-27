import React from 'react';

function OppHand() {
  return (
    <div className="hand" id="oppHand">
    <div>Opponent Hand</div>
    <button className="buttons" id="rockbutton" value="rock"></button>
    <button className="buttons" id="paperbutton" value="paper"></button>
    <button className="buttons" id="scissorsbutton" value="scissors"></button>
  </div>
  );
}

export default OppHand;