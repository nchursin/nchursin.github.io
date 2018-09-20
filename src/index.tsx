import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Theme from './theme'

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
