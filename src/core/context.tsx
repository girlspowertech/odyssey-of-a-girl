import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Odyssey, OdysseyData } from '.';

interface OdysseyContextType {
  game: Odyssey;
  message: string;
  move: (choice?: number) => void;
  preview: () => void;
  showingPreview: boolean;
}

const OdysseyContext = createContext<OdysseyContextType | undefined>(undefined);

interface OdysseyProviderProps {
  children: ReactNode;
  initialData: OdysseyData;
}

const OdysseyProvider: React.FC<OdysseyProviderProps> = ({ children, initialData }) => {
  const [game, setGame] = useState(() => new Odyssey(initialData));
  const [message, setMessage] = useState<string>('');
  const [showingPreview, setShowingPreview] = useState<boolean>(false);

  const move = (choice?: number) => {
    try {
      const msg = game.move(choice);
      setShowingPreview(false);
      setMessage(msg);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unknown error occurred');
      }
    }
  };

  const preview = () => {
    setShowingPreview(true);
  }

  const value = {
    game,
    message,
    move,
    preview,
    showingPreview
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