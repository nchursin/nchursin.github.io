import * as React from 'react';
import ReactSVG from 'react-svg'

import photo from '@assets/svg/me.svg'

import Certs from "./certs";
import Info from "./info";

import './Main.css';

class Main extends React.Component {
  public render() {
    return (
      <div className="Main">
        <Info/>
        <Certs/>
      </div>
    );
  }
}

export default Main;
