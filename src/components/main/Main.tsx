import * as React from 'react';

import './Main.css';

class Main extends React.Component {
  public render() {
    return (
      <div className="Main">
        <p className="intro">
          Hi! I'm Nikita. I'm build Salesforce apps and various open source tools for VSCode and Sublime at <a href="https://www.aquivalabs.com/">Aquiva Labs</a>.
          <br/>
          Currently I'm working on <a href="https://github.com/nchursin/prettier-apex">Prettier for Salesforce Apex</a> and <a href="https://github.com/nchursin/chevrotain-apex">Chevrotain-based Apex parser</a>.
        </p>
      </div>
    );
  }
}

export default Main;
