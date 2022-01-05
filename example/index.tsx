import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';

import "./indec.css";
import { Button, Footer, NavBar, ShiningDiv, Switch } from "react-landing-ui";

const App = () => {
  return (
    <>
      <NavBar logo={<span className="logo">Logo</span>}>
        <a href="#">About</a>
        <a href="#">Pricing</a>
        <a href="#">Roadmap</a>
        <a href="#">Contact</a>
        <ShiningDiv>
          <a target="_blank" href="https://github.com/architgarg/react-landing-ui/">
            <Button>View on Github</Button>
          </a>
        </ShiningDiv>
      </NavBar>
      <div className="main">
        <Switch label="Sample Switch"/>
      </div>
      <Footer
        logo={<span className="logo">Logo</span>}
        mainLinks={<>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Roadmap</a>
          <a href="#">Contact</a>
        </>}
        extraLinks={<>
          <a href="#">Privacy</a>
          <a href="#"> &copy; Archit 2022</a>
        </>}
      />
    </>

  );
};

ReactDOM.render(<App />, document.getElementById('root'));
