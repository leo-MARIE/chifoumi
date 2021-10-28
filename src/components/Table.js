import React from 'react';
import rock from './../image/rock200.png';
import paper from './../image/paper200.png';
import scissors from './../image/scissors200.png';

function Table(props) {

let oppImage;
if(props.signs.oppSign === "rock") {
  oppImage = <img src={rock} alt="Rock"></img>
} else if(props.signs.oppSign === "paper") {
  oppImage = <img src={paper} alt="Paper"></img>
} else if(props.signs.oppSign === "scissors") {
  oppImage = <img src={scissors} alt="Scissors"></img>
}

let myImage;
if(props.signs.mySign === "rock") {
  myImage = <img src={rock} alt="Rock"></img>
} else if(props.signs.mySign === "paper") {
  myImage = <img src={paper} alt="Paper"></img>
} else if(props.signs.mySign === "scissors") {
  myImage = <img src={scissors} alt="Scissors"></img>
}

  return (
    <div id="table">
      <div id="tableImages">
        <div className="imageWrapper">
          {oppImage}
        </div>
        <div className="imageWrapper">
          {myImage}
        </div>
      </div>
    </div>
  );
}

export default Table;