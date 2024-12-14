import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Questions } from './pages/questions/Questions';
import { Result } from './pages/result/Result';
import { CssBaseline } from '@mui/material';
import { PlayerContextProvider } from './context/PlayerContext';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <PlayerContextProvider >
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </PlayerContextProvider>
  );
}

export default App;
