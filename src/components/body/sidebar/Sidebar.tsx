import * as React from 'react';
import ReactSVG from 'react-svg'

import Vr from '../../_shared/vr'

import './Sidebar.css';

class Sidebar extends React.Component {
  public render() {
    return (
      <div className="Sidebar">
        <Vr/>
      </div>
    );
  }
}

export default Sidebar;
