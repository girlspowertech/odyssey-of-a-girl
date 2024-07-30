import React, { useState } from 'react';
import { useOdyssey } from '../../core/context';
import Chessboard from '@/components/ChessBoard';
import { motion, AnimatePresence } from 'framer-motion';

const StoryIntro: React.FC = () => {
  const { preview } = useOdyssey();

  const lines = [
    "欢迎来到\"Odyssey of a Girl\"",
    "一场关于成长、选择和命运的互动冒险",
    "你将扮演一个名叫 Rita 的女孩",
    "代表她在人生中做出各种选择",
    "你的每一个决定都将影响 Rita 的未来",
    "开始你的冒险吧"
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-2" onClick={ () => {
      preview();
    } }>
      { lines.map((line, index) => (
        <motion.p
          key={ index }
          className="text-green110 text-base mt-2 text-center"
          initial={ { opacity: 0, y: 20 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { delay: index * 0.8, duration: 0.6 } }
          onAnimationComplete={ () => index === lines.length - 1 ? preview() : null }
        >
          { line }
        </motion.p>
      )) }
    </div>
  );
};

const Game = () => {

  const { game, showingPreview, move } = useOdyssey();
  const cur = game.board[game.currentPosition];

  return (
    <>
      <div className='flex items-center flex-col font-jeju mt-[3%] text-green50 max-w-[1440px] mx-auto'>
        <h1 className='text-2xl sm:text-4xl mb-[3%]'>Odyssey of a girl</h1>
        <div className='flex w-full justify-between items-center gap-12 flex-col sm:flex-row'>
          <Chessboard />
          <div className='flex flex-col w-[70%] sm:w-[30%] p-2 md:p-4 min-h-64 rounded bg-yellow-50 mx-auto'>
            <div className='mx-auto mt-2 text-green110 text-2xl'>Note</div>
            <StoryIntro />
          </div>
        </div>
      </div>
      <AnimatePresence>
        { showingPreview && (
          <motion.div
            className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 whitespace-pre-line flex items-center justify-center z-50'
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
          >
            <div className='bg-white m-4 p-4 rounded-lg flex items-center gap-8 flex-col'>
              <p className='text-green110 text-lg text-center leading-8'>{ cur.description }</p>
              {
                cur.type === 'choice' && (
                  <div className='flex gap-4 flex-col'>
                    { cur.options.map((option, index) => (
                      <button
                        key={ index }
                        className='border-green100 border-2 text-green100 px-4 py-2 hover:bg-green100 hover:text-white hover:shadow-lg transition duration-200 ease-in-out rounded-md'
                        onClick={ () => move(index) }
                      >
                        { option.text }
                      </button>
                    )) }
                  </div>
                )
              }
              {
                cur.type === 'event' && (
                  <button
                    className='w-32 bg-green100 text-white px-4 py-2 rounded-lg'
                    onClick={ () => move() }
                  >
                    Continue
                  </button>
                )
              }
            </div>
          </motion.div>
        ) }
      </AnimatePresence>
    </>
  );
};

export default Game;

