import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme, GlobalStyle } from '../utils';
import HomePage from './HomePage';
import About from './About';
import Gallery from './Gallery';
import { BrowserRouter, Route } from 'react-router-dom';
import '../index.css';

const BigWrapper = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  let theme = useDarkTheme ? darkTheme : defaultTheme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Route path="/About">
          <About theme={theme} />
        </Route>
        <Route path="/Gallery">
          <Gallery theme={theme} />
        </Route>
        <Route exact path="/">
          <HomePage theme={theme} />
        </Route>
        <button onClick={() => setUseDarkTheme(!useDarkTheme)}>
          Use darkTheme
        </button>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default BigWrapper;
