import React, { useState } from 'react';
import { useOdyssey } from '../../core/context';

const Game = () => {

  const { move, message } = useOdyssey();

  return (
    <>
      <h1>Odyssey of a girl</h1>
      <button onClick={ move }>掷骰子</button>
      <p>{ message }</p>
    </>
  );
};

export default Game;

