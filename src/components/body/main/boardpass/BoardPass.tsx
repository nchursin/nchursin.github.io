import * as React from "react";


import "./BoardPass.css";

class BoardPass extends React.Component {
  public render() {
    return (
      <div className="BoardPass">
        <iframe width="980" height="410" src="https://mars.nasa.gov/layout/embed/send-your-name/mars2020/certificate/?cn=88466746763"/>
      </div>
    );
  }
}

export default BoardPass;
