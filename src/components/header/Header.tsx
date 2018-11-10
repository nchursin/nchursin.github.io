import * as React from 'react';

import ReactSVG from 'react-svg'

import Menu from '../menu'

import blank from '../../assets/svg/blank.svg'

import './Header.css';

class Header extends React.Component {
  public render() {
    return (
      <div className="Header">
        <div className="flex-header">
          <div className="logo-container">
            <ReactSVG src={blank} />
          </div>
          <div className="menu-container">
            <Menu/>
          </div>
        </div>
        <div className="horizontal-line">
          <hr/>
        </div>
      </div>
    );
  }
}

export default Header;
