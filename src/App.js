import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import SchoolMap from './components/SchoolMap';
import './App.css';

// Создаем тему для Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <SchoolIcon sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Умная Школа - Система Мониторинга
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Интерактивный план здания
            </Typography>
            <SchoolMap />
          </Box>
          
          <Box sx={{ mt: 2, textAlign: 'center', fontSize: '0.8rem', color: 'text.secondary' }}>
            <Typography variant="body2">
              © 2025 Умная Школа. Система мониторинга и управления.
            </Typography>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
