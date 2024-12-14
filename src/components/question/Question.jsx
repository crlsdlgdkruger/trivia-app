import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TitleH5 } from "../typography/title/TitleH5";
import { useContext, useEffect, useState } from "react";
import PlayerContext from "../../context/PlayerContext";

export const Question = ({ value, currentQuestionIndex, setCurrentQuestionIndex }) => {

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const { player, updatePlayer } = useContext(PlayerContext);

  useEffect(() => {
    const opt = value.incorrect_answers;
    const randomIndex = Math.floor(Math.random() * opt.length);
    opt.splice(randomIndex, 0, value.correct_answer);
    setOptions(opt);
  }, [currentQuestionIndex])

  const submitAnswer = (e) => {
    e.preventDefault();
    if (selectedOption === value.correct_answer) {
      updatePlayer({ ...player, score: player.score + 1 })
    }
    setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  }

  const handleOptionsChange = (e) => {
    setSelectedOption(e.target.value);
  }


  function decodeHtmlEntities(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (

    <form onSubmit={(e) => { submitAnswer(e) }}>
      <TitleH5>Question: {decodeHtmlEntities(value.question)}</TitleH5>
      {/* Opciones */}
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel id="options-label">Options</InputLabel>
        <Select
          labelId="options-label"
          id="options-select"
          onChange={handleOptionsChange}
          label="Options"
        >
          {options.map((option, index) => {
            return (
              <MenuItem value={option} key={index}>{option}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" fullWidth>Submit</Button>
    </form>
  );
};