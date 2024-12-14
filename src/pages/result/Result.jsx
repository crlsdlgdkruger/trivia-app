import { Button, Container } from "@mui/material";
import { HighScore } from "../../components/highScore/HighScore";
import { useContext, useEffect } from "react";
import PlayerContext from "../../context/PlayerContext";
import { PlayerService } from "../../services/PlayerService";
import "./Result.css";
import "../../App.css"

export const Result = ({ score }) => {
  const { player, updatePlayer } = useContext(PlayerContext)

  useEffect(() => {
    savePlayer();
  }, [])

  const savePlayer = () => {
    if (player.name != "") {
      updatePlayer({ ...player, score: score });
      PlayerService.savePlayer(player);
    }

  }

  return (
    <Container className="result-container">
      <div className="sub-container">
        <HighScore />
        <Button className="button" variant="contained" color="primary" onClick={() => { window.location.href = "/" }} fullWidth>Continue</Button>
      </div>
    </Container>
  );
};