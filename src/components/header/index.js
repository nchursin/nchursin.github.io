import * as React from "react"

import Link from './headerLink'
import commonStyles from '../../styles'

import './styles.css'

const headerStyle = {
  ...commonStyles.flex.column,
  ...commonStyles.flex.alignSelfCenter,
  width: '60%',
}

const linksSection = {
  ...commonStyles.flex.row,
  ...commonStyles.flex.justifyContentSpaceEvenly,
}

const separatorStyle = {
  // flex: '1'
}

const linkStyle = {
  // flex: '1'
}

const links = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/about/',
    title: 'About',
  },
  {
    to: 'https://salesforcecraft.medium.com/',
    title: 'Blog',
    external: true,
  },
  {
    to: '/speaking/',
    title: 'Speaking',
  },
  {
    to: '/projects/',
    title: 'Projects',
  },
]


// markup
const Header = () => {
  let url = typeof window !== 'undefined' ? window.location.pathname : ''
  url = url || '/'

  return (
    <div style={headerStyle}>
      <div className="links" style={linksSection}>
        {links.map((link) => (
          <Link style={linkStyle} to={link.to} title={link.title} active={url === link.to} external={link.external}/>
        ))}
      </div>
      <div style={separatorStyle}>
        <hr/>
      </div>
    </div>
  )
}

export default Header
