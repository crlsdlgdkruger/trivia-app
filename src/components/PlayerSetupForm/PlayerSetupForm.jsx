import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { TitleH5 } from "../typography/title/TitleH5";
import { useNavigate } from "react-router-dom";
import PlayerContext from "../../context/PlayerContext";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "../generalStyles.css";

export const PlayerSetupForm = () => {
  const [difficulty, setDifficulty] = useState(5);
  const { player, updatePlayer } = useContext(PlayerContext);
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    updatePlayer({ ...player, name: event.target.value });
  }

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const submitPlayerSetup = (e) => {
    e.preventDefault();
    if (player.name == "") {
      updatePlayer({ ...player, name: "NaN" });
    }
    navigate("/questions", { state: { difficulty } })
  }

  return (
    <div className="contenedor">
      <TitleH5>Player Setup</TitleH5>
      <form onSubmit={(e) => { submitPlayerSetup(e) }}>
        {/* Campo de nombre */}
        <TextField
          label="Name"
          placeholder="Enter your name"
          variant="outlined"
          onChange={handleNameChange}
          fullWidth
        />

        {/* Campo de dificultad */}
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel id="difficulty-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-label"
            id="difficulty-select"
            value={difficulty}
            onChange={handleDifficultyChange}
            label="Difficulty"
          >
            <MenuItem value={5}>Easy</MenuItem>
            <MenuItem value={10}>Medium</MenuItem>
            <MenuItem value={15}>Hard</MenuItem>
          </Select>
        </FormControl>

        {/* Botón */}
        <Button variant="contained" type="submit" fullWidth endIcon={<PlayArrowIcon />}>
          Play Start
        </Button>
      </form>
    </div>
  );
};
