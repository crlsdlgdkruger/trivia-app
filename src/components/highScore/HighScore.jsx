import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { TitleH5 } from '../typography/title/TitleH5';
export const HighScore = () => {
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

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};