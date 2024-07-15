import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Square, isValidSquare } from './core';
import { OdysseyProvider } from './core/context';
import './index.css';

function isValidGameData(data: any): data is { squares: Square[] } {
  return Array.isArray(data.squares) && data.squares.every(isValidSquare);
}

const gameData = {
  "squares": [
    { id: 0, "type": "event", "description": "获得奖学金", "effect": { "education": 2, "happiness": 1 } },
    {
      id: 1,
      "type": "choice", "description": "选择学习还是打工",
      "options": [
        { "text": "努力学习", "effect": { "education": 3, "happiness": -1 } },
        { "text": "外出打工", "effect": { "money": 5, "education": -1 } }
      ]
    },
    { id: 2, "type": "empty", "description": "空白格" }
  ]
};

if (isValidGameData(gameData)) {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <OdysseyProvider initialData={ gameData }>
        <App />
      </OdysseyProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Invalid game data');
}
