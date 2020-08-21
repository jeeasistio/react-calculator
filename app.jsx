import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui';
import Header from '/components/Header/Header.jsx';
import Calculator from '/components/Calculator/Calculator.jsx';

const App = () => {
  return (
    <div className="App">
      <CssBaseline>
        <Header />
        <Calculator />
      </CssBaseline>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);