import * as React from 'react';
import ReactSVG from 'react-svg'

import Vr from '@shared/vr'
import Icons from './icons'
import Projects from './projects'

import './Sidebar.css';

class Sidebar extends React.Component {
  public render() {
    return (
      <div className="Sidebar">
        <Vr/>
        <div className="flex-column content">
          <span className="heading">
            Social
          </span>
          <hr className="separator"/>
          <div className="flex-row">
            <Icons/>
          </div>
          <br/>
          <span className="heading">
            Opensource projects
          </span>
          <hr className="separator"/>
          <div className="flex-row">
            <Projects/>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
