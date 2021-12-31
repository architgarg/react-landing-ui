import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';

import { ShiningDiv } from "react-landing-ui";
import "./indec.css";

const App = () => {
  return (
    <ShiningDiv className="main">Test</ShiningDiv>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
