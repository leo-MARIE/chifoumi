import React from 'react';
import rock from './../image/rock.png';
import paper from './../image/paper.png';
import scissors from './../image/scissors.png';

function Table(props) {

let oppImage;
if(props.signs.oppSign === "rock") {
  oppImage = <img src={rock} alt="Rock" width="100" height="100"></img>
} else if(props.signs.oppSign === "paper") {
  oppImage = <img src={paper} alt="Paper" width="100" height="100"></img>
} else if(props.signs.oppSign === "scissors") {
  oppImage = <img src={scissors} alt="Scissors" width="100" height="100"></img>
}

let myImage;
if(props.signs.mySign === "rock") {
  myImage = <img src={rock} alt="Rock" width="100" height="100"></img>
} else if(props.signs.mySign === "paper") {
  myImage = <img src={paper} alt="Paper" width="100" height="100"></img>
} else if(props.signs.mySign === "scissors") {
  myImage = <img src={scissors} alt="Scissors" width="100" height="100"></img>
}

  return (
    <div id="table">
      <h2>The Table</h2>
      <h3>Opponent sign</h3>
      <div className="imageWrapper">
        {oppImage}
        </div>
      <h3>My Sign</h3>
      <div className="imageWrapper">
        {myImage}
      </div>
    </div>
  );
}

export default Table;