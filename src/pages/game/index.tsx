import React, { useState } from 'react';
import { useOdyssey } from '../../core/context';
import Chessboard from '@/components/ChessBoard';

const Game = () => {

  const { move, message } = useOdyssey();

  return (
    <div className='flex items-center flex-col font-jeju  mt-5 text-secondary '>
      <h1 className='text-lg sm:text-xl'>Odyssey of a girl</h1>
      <Chessboard />
      <button className='mt-3' onClick={ move }>Move</button>
      <p>{ message }</p>
    </div>
  );
};

export default Game;

