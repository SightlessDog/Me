import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Components/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Gallery from './Components/Gallery';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme, GlobalStyle } from './utils';
import './index.css';
import Cursor from './utils/Cursor';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(true);
  let theme = useDarkTheme ? darkTheme : defaultTheme;
  return (
    <BrowserRouter>
      <Cursor />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/About">
            <About theme={theme} />
          </Route>
          <Route exact path="/Gallery">
            <Gallery theme={theme} />
          </Route>
          <Route exact path="/Home">
            <HomePage theme={theme} />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
          <button onClick={() => setUseDarkTheme(!useDarkTheme)}>
            Use darkTheme
          </button>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
