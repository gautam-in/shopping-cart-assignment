import React from 'react';
import { ThemeProvider } from 'styled-components';
import Homepage from './pages/Homepage';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="container">
      <Homepage />
    </div>
    </ThemeProvider>
  );
}
export default App;
