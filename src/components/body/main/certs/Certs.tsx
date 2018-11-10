import * as React from "react";
import ReactSVG from 'react-svg'

import admin from "@assets/svg/certs/admin.svg";
import dev1 from "@assets/svg/certs/dev1.svg";
import dev2 from "@assets/svg/certs/dev2.svg";
import appBuilder from "@assets/svg/certs/appBuilder.svg";
import identity from "@assets/svg/certs/identity.svg";
import integration from "@assets/svg/certs/integration.svg";
import sharing from "@assets/svg/certs/sharing.svg";
import lifecycle from "@assets/svg/certs/lifecycle.svg";
import dataArch from "@assets/svg/certs/dataArch.svg";
import appArch from "@assets/svg/certs/appArch.svg";
import sysArch from "@assets/svg/certs/sysArch.svg";

import "./Certs.css";

class Certs extends React.Component {
  public render() {
    return (
      <div className="Certs">
        <ReactSVG src={admin}/>
        <ReactSVG src={dev1}/>
        <ReactSVG src={dev2}/>
        <ReactSVG src={appBuilder}/>
        <ReactSVG src={identity}/>
        <ReactSVG src={integration}/>
        <ReactSVG src={sharing}/>
        <ReactSVG src={lifecycle}/>
        <ReactSVG src={dataArch}/>
        <ReactSVG src={appArch}/>
        <ReactSVG src={sysArch}/>
      </div>
    );
  }
}

export default Certs;
