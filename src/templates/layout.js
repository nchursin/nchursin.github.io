import * as React from "react"

import { Header, Sidebar, Footer } from '../components'
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
    <span>
      <main style={pageStyles}>
        <Header/>
        <Sidebar/>
        <div style={content}>
          {children}
        </div>

      </main>
      <footer style={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
      }}>
        <Footer/>
      </footer>
    </span>
  )
}
