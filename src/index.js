import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme, GlobalStyle } from './utils';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Gallery from './Components/Gallery';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  let theme = useDarkTheme ? darkTheme : defaultTheme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Route path="/">
          <HomePage theme={theme} />
        </Route>
        <Route path="/About">
          <About theme={theme} />
        </Route>
        <Route path="/Gallery">
          <Gallery theme={theme} />
        </Route>
        <button onClick={() => setUseDarkTheme(!useDarkTheme)}>
          Use darkTheme
        </button>
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
