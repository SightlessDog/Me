import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Components/Welcome';
import './index.css';

const App = () => {
  return (
    <>
      <Welcome />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
