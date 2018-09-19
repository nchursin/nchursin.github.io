import * as React from 'react';

// import { withStyles } from '@material-ui/core/styles';
// import * as PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpIcon from '@material-ui/icons/Help';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PhoneIcon from '@material-ui/icons/Phone';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
// import Typography from '@material-ui/core/Typography';

import './Menu.css';

class Menu extends React.Component {
  public state: { value: number };
  
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  public handleChange = (event: any, value: number): void => {
    this.setState({ value });
  };

  public render() {
    const { value } = this.state;

    return (
      <div className="Menu">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable={true}
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Item One" icon={<PhoneIcon />} />
            <Tab label="Item Two" icon={<FavoriteIcon />} />
            <Tab label="Item Three" icon={<PersonPinIcon />} />
            <Tab label="Item Four" icon={<HelpIcon />} />
            <Tab label="Item Five" icon={<ShoppingBasket />} />
            <Tab label="Item Six" icon={<ThumbDown />} />
            <Tab label="Item Seven" icon={<ThumbUp />} />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default Menu;
