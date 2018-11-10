import * as React from 'react';
import ReactSVG from 'react-svg'

import photo from '@assets/svg/me.svg'

import './Info.css';

class Info extends React.Component {
  public render() {
    return (
      <div className="Info">
        <div className="photo">
          <ReactSVG src={photo} />
        </div>
        <div className="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    );
  }
}

export default Info;
