import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Nav from './components/Nav'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { indigo, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: indigo[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: teal['A400'],
    },
  },
});


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Nav />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
