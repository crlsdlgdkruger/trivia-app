import { createContext } from 'react';
import { useState } from 'react';
import { Player } from '../models/Player';

const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState(new Player("", 0));
  const updatePlayer = (player) => {
    setPlayer(player);
  };

  return (
    <PlayerContext.Provider value={{ player, updatePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}

export default PlayerContext;