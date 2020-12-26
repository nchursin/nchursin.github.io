import * as React from "react"

import { Link } from "gatsby"

const linkStyle = {
  // marginRight: '0.5rem',
  // marginLeft: '0.5rem',
}
const activeLink = {
  fontWeight: 'bold'
}

// markup
const HeaderLink = (props) => {
  return (
    <span style={{...linkStyle, ...props.style, ...(props.active ? activeLink : {})}}>
      <Link to={props.to}>{props.title}</Link>
    </span>
  )
}

export default HeaderLink
