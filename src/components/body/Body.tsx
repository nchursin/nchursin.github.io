import * as React from 'react';

import './Body.css';

import Main from './main'

class Body extends React.Component {
  public render() {
    return (
      <div className="Body">
        <Main/>
      </div>
    );
  }
}

export default Body;
