import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useOdyssey } from './core/context';

const App = () => {

  const { move, message } = useOdyssey();

  return (
    <BrowserRouter>
        <h1>Odyssey of a girl</h1>
        <button onClick={ move }>掷骰子</button>
        <p>{ message }</p>
    </BrowserRouter>
  );

};

export default App;
