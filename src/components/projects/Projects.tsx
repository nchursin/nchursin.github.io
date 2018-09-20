import * as React from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import prettier from '../../assets/svg/prettier.svg'
import salesforce from '../../assets/svg/salesforce.svg'
import sublime from '../../assets/svg/sublime.svg'
import vscode from '../../assets/svg/vscode.svg'

import apexpmd from '../../assets/png/apexpmd.png'

import './Projects.css';

class Projects extends React.Component {
  public render() {
    return (
      <div className="Projects">
        <Paper className="paper" elevation={1}>
          <Typography variant="headline" align="left" className="text headline" component="h3">
            Current Projects
          </Typography>
          <div className="text">
              <List >
                <ListItem>
                  <a href="https://github.com/nchursin/prettier-apex">
                    <img className="icon-small" src={prettier} alt="Sublime Text"/>&nbsp;
                    Salesforce Apex Prettier
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://github.com/nchursin/chevrotain-apex">
                    <img className="icon-small" src={salesforce} alt="Sublime Text"/>&nbsp;
                    Salesforce Apex Parser
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://marketplace.visualstudio.com/items?itemName=chuckjonas.apex-pmd">
                    <img className="icon-small" src={apexpmd} alt="Apex PMD"/>&nbsp;
                    VSCode Apex PMD
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://marketplace.visualstudio.com/publishers/nchursin">
                    <img className="icon-small" src={vscode} alt="VSCode"/>&nbsp;
                    VSCode Plugins
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://packagecontrol.io/browse/authors/nchursin">
                    <img className="icon-small" src={sublime} alt="Sublime Text"/>&nbsp;
                    Sublime Text Plugins
                  </a>
                </ListItem>
              </List>
            </div>
        </Paper>
      </div>
    );
  }
}

export default Projects;
