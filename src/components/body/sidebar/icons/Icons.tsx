import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon'
import ReactSVG from 'react-svg'

import github from '@assets/svg/github.svg'
import linkedin from '@assets/svg/linkedin.svg'
import stackexchange from '@assets/svg/stackexchange.svg'

import './Icons.css';

class Icons extends React.Component {
  public render() {
    return (
      <div className="Icons flex-row">
        <IconButton
          id="github-icon"
          href="https://github.com/nchursin"
          className="icon-link"
        >
          <ReactSVG
            className="svg-icon"
            src={github}
          />
        </IconButton>

        <IconButton
          id="linkedin-icon"
          href="https://linkedin.com/in/nchursin/"
          className="icon-link"
        >
          <ReactSVG
            className="svg-icon"
            src={linkedin}
          />
        </IconButton>

        <IconButton
          id="stackexchange-icon"
          href="https://salesforce.stackexchange.com/users/38104/blank"
          className="icon-link"
        >
          <ReactSVG
            className="svg-icon"
            src={stackexchange}
          />
        </IconButton>
      </div>
    );
  }
}

export default Icons;
