import React, { FC } from "react";
import { useOdyssey } from "../core/context";
import { Spiral } from "./svg";

const CELL_LENGTH = 29;

const colorsPalette = [
  'text-red-400',
  'text-yellow-400',
  'text-green-400',
  'text-blue-400',
  'text-indigo-400',
  'text-purple-400',
  'text-pink-400',
  'text-red-400',
  'text-yellow-400',
  'text-green-400',
];

const Chessboard: FC = () => {

  const { message } = useOdyssey();
  const pathPropsList = Array.from({ length: CELL_LENGTH }, (_, i) => ({
    className: `${ colorsPalette[i % colorsPalette.length] } cursor-pointer hover:drop-shadow-md
     transition duration-200 ease-in-out`,
  }));

  return (
    <div className="chessboard flex flex-col text-xl mx-auto mt-2 text-green-800 bg-yellow-50 w-[90%] sm:w-[50%] p-2 sm:p-5 rounded-lg">
      <Spiral
        width={ '100%' }
        height={ '100%' }
        pathPropsList={
          pathPropsList
        } />
      <div className="mt-6 mx-auto leading-3"> ChessBoard </div>
    </div>
  );
}

export default Chessboard;
