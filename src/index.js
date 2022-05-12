import React, { useState } from 'react';
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
import Navigation from './Components/Navigation';
import styled from 'styled-components';

const Grid = styled.div`
  display: fLex;
  flex-direction: column;
`;

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  let theme = useDarkTheme ? darkTheme : defaultTheme;
  return (
    <BrowserRouter>
      <Cursor />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/About">
            <Grid>
              <Navigation theme={theme} />
              <About theme={theme} />
            </Grid>
          </Route>
          <Route exact path="/Gallery">
            <Grid>
              <Navigation theme={theme} />
              <Gallery theme={theme} />
            </Grid>
          </Route>
          <Route exact path="/Gallery/:cat">
            <Grid>
              <Navigation theme={theme} />
            </Grid>
          </Route>
          <Route exact path="/Home">
            <Grid>
              <Navigation theme={theme} />
              <HomePage theme={theme} />
            </Grid>
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
