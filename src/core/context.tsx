import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Odyssey, OdysseyData } from '.';

interface OdysseyContextType {
  game: Odyssey;
  message: string;
  move: () => void;
}

const OdysseyContext = createContext<OdysseyContextType | undefined>(undefined);

interface OdysseyProviderProps {
  children: ReactNode;
  initialData: OdysseyData;
}

const OdysseyProvider: React.FC<OdysseyProviderProps> = ({ children, initialData }) => {
  const [game, setGame] = useState(() => new Odyssey(initialData));
  const [message, setMessage] = useState<string>('');

  const move = () => {
    try {
      const msg = game.move();
      setMessage(msg);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unknown error occurred');
      }
    }
  };

  const value = {
    game,
    message,
    move,
  };

  return (
    <OdysseyContext.Provider value={ value }>
      { children }
    </OdysseyContext.Provider>
  );
};

const useOdyssey = () => {
  const context = useContext(OdysseyContext);
  if (context === undefined) {
    throw new Error('useOdyssey must be used within a OdysseyProvider');
  }
  return context;
};


export { OdysseyProvider, useOdyssey };