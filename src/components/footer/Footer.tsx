import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';

import Icons from '../icons'

import './Footer.css';

class Footer extends React.Component {
  public render() {
    return (
      <div className="Footer">
        <Typography align="left" variant="caption" color="inherit" className="grow">
          © Nikita Chursin, 2018
        </Typography>
      </div>
    );
  }
}

export default Footer;
