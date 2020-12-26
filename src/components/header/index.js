import * as React from "react"

import Link from './headerLink'
import commonStyles from '../../styles'

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
  return (
    <div style={headerStyle}>
      <div style={linksSection}>
        {links.map((link) => (
          <Link style={linkStyle} to={link.to} title={link.title} />
        ))}
      </div>
      <div style={separatorStyle}>
        <hr/>
      </div>
    </div>
  )
}

export default Header
