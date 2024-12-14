import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { TitleH5 } from '../typography/title/TitleH5';
import { useEffect, useState } from 'react';
export const HighScore = () => {

  const [highScore, setHightScore] = useState([]);

  useEffect(() => {
    const localStorageScore = JSON.parse(localStorage.getItem("players"));
    if (localStorageScore) {
      localStorageScore.sort((a, b) => b.score - a.score);
      try {
        setHightScore(localStorageScore);
      } catch (error) {
        console.error(error);
      }
    }

  }, [])

  return (
    <div>
      <TitleH5>High Score</TitleH5>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {highScore.length > 0 ? (
              highScore.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.score}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No high scores available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};