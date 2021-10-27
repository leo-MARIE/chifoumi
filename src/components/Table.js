import React from 'react';
import rock from './../image/rock150.png';
import paper from './../image/paper150.png';
import scissors from './../image/scissors150.png';

function Table(props) {

let oppImage;
if(props.signs.oppSign === "rock") {
  oppImage = <img src={rock} alt="Rock" width="150" height="150"></img>
} else if(props.signs.oppSign === "paper") {
  oppImage = <img src={paper} alt="Paper" width="150" height="150"></img>
} else if(props.signs.oppSign === "scissors") {
  oppImage = <img src={scissors} alt="Scissors" width="150" height="150"></img>
}

let myImage;
if(props.signs.mySign === "rock") {
  myImage = <img src={rock} alt="Rock" width="150" height="150"></img>
} else if(props.signs.mySign === "paper") {
  myImage = <img src={paper} alt="Paper" width="150" height="150"></img>
} else if(props.signs.mySign === "scissors") {
  myImage = <img src={scissors} alt="Scissors" width="150" height="150"></img>
}

  return (
    <div id="table">
      <div id="tableImages">
        <div className="imageWrapper">
          {oppImage}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="imageWrapper">
          {myImage}
        </div>
      </div>
    </div>
  );
}

export default Table;