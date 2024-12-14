import { HighScore } from "../../components/highScore/HighScore";
import { PlayerSetupForm } from "../../components/PlayerSetupForm/PlayerSetupForm";
import { Container } from "@mui/material";
import "./Home.css";
import "../../App.css"

export const Home = () => {
  return (
    <Container className="home-container">
      <div className="sub-container">
        <HighScore />
        <PlayerSetupForm />
      </div>
    </Container>
  );
};