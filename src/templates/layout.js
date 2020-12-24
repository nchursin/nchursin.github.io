import * as React from "react"

import { Header } from '../components'

const flexColumn = {
  display: 'flex',
  flexFlow: 'column',
}

const pageStyles = {
  color: "#232129",
  padding: "2rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  ...flexColumn,
  alignItems: 'center',
}

// markup
export default ({ children }) => {
  return (
    <main style={pageStyles}>
      <Header/>
      <div>
        {children}
      </div>
    </main>
  )
}
