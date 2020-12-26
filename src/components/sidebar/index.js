import React, { Component } from 'react'

import classnames from 'classnames'

import { LogoTelegram, LogoTwitter, LogoLinkedIn, LogoTelegramChannel } from '../../logos'

import './styles.css'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: typeof window !== `undefined` ? window.pageYOffset : 0,
      visible: false
    };
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const links = [
      {
        logo: LogoTwitter,
        to: 'https://twitter.com/NChursinSF',
        class: 'twitter-icon'
      },
      {
        logo: LogoTelegram,
        to: 'https://t.me/nchursin',
        class: 'bg-cornflowerblue',
      },
      {
        logo: LogoLinkedIn,
        to: 'https://www.linkedin.com/in/nchursin/',
        class: 'li-icon',
      },
      {
        logo: LogoTelegramChannel,
        to: 'https://t.me/salesforcecraft',
        class: 'bg-cornflowerblue',
      },
    ];
    return (
      <div className={
        classnames(
          "sidebar",
          {
            "sidebar--hidden": !this.state.visible
          }
        )
      }>
        {links.map(
          (link) => (
            <a
              className={
                classnames(
                  'sidebar-element',
                  'button',
                  link.class
                )
              }
              href={link.to}
              target="_blank"
            >
              <link.logo className="svg-small" />
            </a>
          )
        )}

        </div>
        )
      }
    }
