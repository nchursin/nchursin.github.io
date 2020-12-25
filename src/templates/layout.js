import * as React from "react"

import { Header } from '../components'
import commonStyles from '../styles'

const content = {
  ...commonStyles.flex.rowStart,
  width: '50%',
}

const pageStyles = {
  color: "#232129",
  padding: "2rem",
  fontFamily: "-apple-system, 'PT Mono', sans-serif, serif",
  ...commonStyles.flex.column,
  ...commonStyles.flex.alignItemsCenter
}

// markup
export default ({ children }) => {
  return (
    <main style={pageStyles}>
      <Header/>
      <div style={content}>
        {children}
      </div>
    </main>
  )
}
