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
