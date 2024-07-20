import React, { useState } from 'react';
import { useOdyssey } from '../../core/context';
import Chessboard from '@/components/ChessBoard';
import { motion } from 'framer-motion';

const StoryIntro: React.FC = () => {
  const lines = [
    "欢迎来到\"Odyssey of a Girl\"",
    "一场关于成长、选择和命运的互动冒险",
    "你将扮演一个名叫小莉的女孩",
    "代表她在人生中做出各种选择",
    "你的每一个决定都将影响小莉的未来",
    "开始你的冒险吧"
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      { lines.map((line, index) => (
        <motion.p
          key={ index }
          className="text-green110 text-base mt-2 text-center"
          initial={ { opacity: 0, y: 20 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { delay: index * 0.8, duration: 0.6 } }
        >
          { line }
        </motion.p>
      )) }
    </div>
  );
};

const Game = () => {

  const { move, message } = useOdyssey();

  return (
    <div className='flex items-center flex-col font-jeju mt-[3%] text-green50 max-w-[1440px] mx-auto'>
      <h1 className='text-2xl sm:text-4xl mb-[3%]'>Odyssey of a girl</h1>
      <div className='flex w-full justify-between items-center gap-12 flex-col sm:flex-row'>
        <Chessboard />
        <div className='flex flex-col w-[70%] sm:w-[30%] p-2 md:p-4 min-h-64 rounded bg-yellow-50 mx-auto'>
          <div className='mx-auto mt-2 text-green110 text-2xl'>Note</div>
          <StoryIntro />
          <p>{ message }</p>
        </div>
      </div>
    </div>
  );
};

export default Game;

