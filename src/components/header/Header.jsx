import { useContext } from "react";
import PlayerContext from '../../context/PlayerContext';
import { TitleH5 } from "../typography/title/TitleH5";
import "../generalStyles.css";
export const Header = () => {
  const { player, updatePlayer } = useContext(PlayerContext)
  return (
    <div className="contenedor">
      <TitleH5>{`Player: ${player.name}    Score:${player.score}`}</TitleH5>
    </div>
  );
};