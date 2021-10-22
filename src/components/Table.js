import React from 'react';

function Table(props) {
  return (
    <div>
      <h2>The Table</h2>
      <h3>Opponent sign</h3>
      <div>{props.signs.oppSign}</div>
      <h3>My Sign</h3>
      <div>{props.signs.mySign}</div>
    </div>
  );
}

export default Table;