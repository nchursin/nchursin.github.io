import * as React from "react"

import { Header } from '../components'

const flex = {
  display: 'flex',
}

const flexColumn = {
  ...flex,
  flexFlow: 'column',
}

const flexRow = {
  ...flex,
  flexFlow: 'row',
}

const content = {
  ...flexRow,
  justifyContent: 'flex-start',
  width: '50%',
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
      <div style={content}>
        {children}
      </div>
    </main>
  )
}
