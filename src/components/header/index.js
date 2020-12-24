import * as React from "react"

import Link from './headerLink'

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '60%',
  alignSelf: 'center',
}

const linksSection = {
  display: 'flex',
  flexDirection: 'row',
  // alignSelf: 'center',
  justifyContent: 'space-evenly',
}

const separatorStyle = {
  // flex: '1'
}

const linkStyle = {
  // flex: '1'
}

// markup
const Header = () => {
  return (
    <div style={headerStyle}>
      <div style={linksSection}>
        <Link style={linkStyle} to="/" title="Home" />
        <Link style={linkStyle} to="/about/" title="About" />
        <Link style={linkStyle} to="https://salesforcecraft.medium.com/" title="Blog" />
        <Link style={linkStyle} to="/speaking/" title="Speaking" />
        <Link style={linkStyle} to="/projects/" title="Projects" />
      </div>
      <div style={separatorStyle}>
        <hr/>
      </div>
    </div>
  )
}

export default Header
