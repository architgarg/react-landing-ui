# react-landing-ui

[![NPM](https://img.shields.io/npm/v/react-landing-ui.svg)](https://www.npmjs.com/package/react-landing-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
[https://architgarg.github.io/react-landing-ui/](https://architgarg.github.io/react-landing-ui/)

## Install

```bash
npm install --save react-landing-ui
```

## Usage

```tsx
import React, { Component } from 'react'

import { Logo } from "./components/Logo";
import { Button, NavBar, Footer, Switch } from 'react-landing-ui';

class Home extends Component {
  render() {
    return <>
      <NavBar logo={<Logo/>}>
        <a href="#">About</a>
        <a href="#">Pricing</a>
        <a href="#">Roadmap</a>
        <a href="#">Contact</a>
        <ShiningDiv>
          <Button>Start Project</Button>
        </ShiningDiv>
      </NavBar>
      <div>
        <Switch label="Sample Switch"/>
      </div>
      <Footer
        logo={<Logo/>}
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
  }
}
```

```css
:root {
  --rlu-primary: #005070;
  --rlu-white: #ffffff;
  --rlu-footer-bg: #1A1834;

  --rlu-font-primary: 'Inter', sans-serif;
  --rlu-font-secondary: 'Poppins', sans-serif;

  --rlu-width-nav: 1080px;
  --rlu-width-container: 890px;
  --rlu-space-vertical: 10rem;
}
```
## License

MIT © [architgarg](https://github.com/architgarg)
