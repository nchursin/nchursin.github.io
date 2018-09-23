import * as React from 'react';

import Projects from '../projects'

import './Main.css';

class Main extends React.Component {
  public render() {
    return (
      <div className="Main">
        <h1>Hi! My name is Nikita</h1>
        <h2>And I build software</h2>
        <p className="intro">
          I build Salesforce apps and various open source tools for VSCode and Sublime Text at <a href="https://www.aquivalabs.com/">Aquiva Labs</a>
          <br/>
          <br/>
          You can contact me via email: <a href="mailto:chursinn91@gmail.com">chursinn91@gmail.com</a>
        </p>
        <Projects />
      </div>
    );
  }
}

export default Main;
