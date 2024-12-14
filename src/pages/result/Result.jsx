import { Container } from "@mui/material";
import { HighScore } from "../../components/highScore/HighScore";
import { useContext, useEffect } from "react";
import PlayerContext from "../../context/PlayerContext";
import { PlayerService } from "../../services/PlayerService";

export const Result = ({ score }) => {
  const { player, updatePlayer } = useContext(PlayerContext)

  useEffect(() => {
    savePlayer();
  }, [])

  const savePlayer = () => {
    updatePlayer({ ...player, score: score });
    PlayerService.savePlayer(player);
  }

  return (
    <Container maxWidth="sm">
      <HighScore />
    </Container>
  );
};