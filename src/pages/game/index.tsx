import React, { useState } from 'react';
import { useOdyssey } from '../../core/context';
import { SpiralBox } from "@/components/svg"
const Game = () => {

  const { move, message } = useOdyssey();

  return (
    <>
      <h1>Odyssey of a girl</h1>
      <SpiralBox />
      <button onClick={ move }>掷骰子</button>
      <p>{ message }</p>
    </>
  );
};

export default Game;

