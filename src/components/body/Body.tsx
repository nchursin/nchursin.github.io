import * as React from 'react';

import './Body.css';

import Main from './main'
import Sidebar from './sidebar'

class Body extends React.Component {
  public render() {
    return (
      <div className="Body">
        <div>
          <Main/>
        </div>
        <div className="sidebar">
          <Sidebar/>
        </div>
      </div>
    );
  }
}

export default Body;
