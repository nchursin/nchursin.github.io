import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';

import Icons from '../icons'

import './Menu.css';

class Menu extends React.Component {
  public render() {
    return (
      <div className="Menu">
        <AppBar position="static" >
          <Toolbar color="primary">
            <Typography align="left" variant="title" color="inherit" className="grow">
              &lt;blank&gt;
            </Typography>
            <div>
              <Icons/>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Menu;
