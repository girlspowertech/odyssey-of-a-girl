import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Square, isValidSquare } from './core';
import { OdysseyProvider } from './core/context';
import './index.css';

function isValidGameData(data: any): data is { squares: Square[] } {
  return Array.isArray(data.squares) && data.squares.every(isValidSquare);
}

const gameData = {
  "squares": [
    {
      id: 0,
      type: "choice",
      description: "1996 年，你出生了，在宁夏一个荒漠无人烟的小村镇。\n你父母的身份是?",
      options: [
        { "text": "承包土地的农民", "effect": { "money": 1, "family": 1 } },
        { "text": "援建西部的大学生", "effect": { "education": 1, "family": 1 } },
        { "text": "当地做生意的商人", "effect": { "money": 1, "family": 1 } }
      ]
    },
    {
      id: 1,
      type: "event",
      description: "1 岁时，你的父母外出打工。你在代步娃娃车里懵懂地望着他们离开。",
      effect: { "education": -1, "happiness": -1, "family": -1 }
    },
    { id: 3, type: "empty", description: "空白格" }
  ]
};

if (isValidGameData(gameData)) {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <HashRouter>
        <OdysseyProvider initialData={ gameData }>
          <App />
        </OdysseyProvider>
      </HashRouter>
    </React.StrictMode>,
  );
} else {
  console.error('Invalid game data');
}
