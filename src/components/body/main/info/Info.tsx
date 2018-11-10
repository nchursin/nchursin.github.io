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
          I'm Nikita, nickname &lt;blank&gt;. I'm a Salesforce architect at <a href="https://www.aquivalabs.com/">Aquiva Labs</a> and an open-source enthusiast. I'm experienced in creating architecture for Salesforce application and developing applications for AppExchange. I also making applications in NodeJS and Python. Right now I'm working on a Prettier plugin for Salesforce Apex. APart from developing some stuff both at work and at my free time, I play bass guitar, digging through my huge anti-library, and spending time tih my lovely wife, daughter, and two cats.
          <p/>
          I'm planning to master the Salesforce CTA exam next year, and create a blog here where I can share my thoughts on this topic, Salesforce all in all, and maybe other stuff.
          <p/>
          You can contact me via email: <a href="mailto:chursinn91@gmail.com">chursinn91@gmail.com</a>
        </div>
      </div>
    );
  }
}

export default Info;
