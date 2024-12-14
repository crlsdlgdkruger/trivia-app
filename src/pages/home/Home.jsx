import { HighScore } from "../../components/highScore/HighScore";
import { PlayerSetupForm } from "../../components/PlayerSetupForm/PlayerSetupForm";
import { Container } from "@mui/material";

export const Home = () => {
  return (
    <Container maxWidth="sm">
      <HighScore />
      <PlayerSetupForm />
    </Container>
  );
};