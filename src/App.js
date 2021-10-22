import React from 'react';
import { useState } from "react";
import MyHand from './components/MyHand';
import OppHand from './components/OppHand';
import Table from './components/Table';
import Timer from './components/Timer';
import Score from './components/Score';

function App() {

  // -----   HOOKS   -----
  const [signs, setSigns] = useState({mySign: "initial sign", oppSign: "initial sign"});
  const [score, setScore] = useState({myScore: 0, oppScore: 0});

  // -----   SET STATE METHODS   -----
  /*                                                                 // useful for changing just one state
  const updateSign = (event) => {
    setSigns(previousState => {
      return { ...previousState, mySign: event.target.value }
    });
  }
  */
 
  const updateSign = (event) => {

    var randomOppSign = newOppSign();               // !!! storing the values before or setScore take previous sign value
    var myEventSign = event.target.value;

    setSigns(() => {
      return { mySign: myEventSign, oppSign: randomOppSign }
    }); // set Signs
   
    setScore((previousState) => {
      if(whoWin(myEventSign, randomOppSign) === "win") {
        return { ...previousState, myScore: previousState.myScore + 1}
      } else if(whoWin(myEventSign, randomOppSign) === "lose") {
        return { ...previousState, oppScore: previousState.oppScore + 1}
      } else {return { ...previousState}}
    }); // set Score       
  } // update sign

  
  // -----   SUB METHODS   -----

  const newOppSign = () => {                                         // returns random sign
    let signArr=["rock", "paper", "scissors"]
    return signArr[Math.floor(Math.random()*3)]
  } 

  const whoWin = (mySign, oppSign) => {                             // return win, lose or exaequo
    if(mySign === oppSign) {
      return "exaequo"
    } else if(mySign === "paper" && oppSign === "rock") {
      return "win"
    } else if(mySign === "paper" && oppSign === "scissors") {
      return "lose"
    } else if(mySign === "rock" && oppSign === "scissors") {
      return "win"
    } else if(mySign === "rock" && oppSign === "paper") {
      return "lose"
        } else if(mySign === "scissors" && oppSign === "paper") {
      return "win"
    } else {
      return "lose" }
  } 

  // -----   RETURN   -----

  return (
    <div>
      <OppHand />
      <Timer />
      <Table signs={signs} />
      <Score score={score} />
      <MyHand updateSign={updateSign} />
    </div>
  );
}

export default App;
