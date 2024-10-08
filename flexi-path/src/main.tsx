import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QuizStateProvider } from './context/QuizStateContext.tsx';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <QuizStateProvider>
          <App />
        </QuizStateProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
