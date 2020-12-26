import * as React from "react"

import { Timeline } from 'react-twitter-widgets'

import { Layout } from '../templates'
import { MyPhoto, Medium } from '../components'
import commonStyles from '../styles'

// styles
const contentStyle = {
  ...commonStyles.flex.column,
  ...commonStyles.flex.justifyContentCenter,
  width: '100%',
}

// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }
// const headingAccentStyles = {
//   color: "#663399",
// }
// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }
// const listStyles = {
//   marginBottom: 96,
//   paddingLeft: 0,
// }
// const listItemStyles = {
//   fontWeight: "300",
//   fontSize: "24px",
//   maxWidth: "560px",
// }

// const linkStyle = {
//   color: "#8954A8",
//   fontWeight: "bold",
//   fontSize: "16px",
//   verticalAlign: "5%",
// }

// const docLinkStyle = {
//   ...linkStyle,
//   listStyleType: "none",
//   marginBottom: 24,
// }

// const descriptionStyle = {
//   color: "#232129",
//   fontSize: "14px",
// }

// const docLink = {
//   text: "Documentation",
//   url: "https://www.gatsbyjs.com/docs/",
//   color: "#8954A8",
// }
// // data
// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial/",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//     color: "#E95800",
//   },
//   {
//     text: "How to Guides",
//     url: "https://www.gatsbyjs.com/docs/how-to/",
//     description:
//       "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
//     color: "#1099A8",
//   },
//   {
//     text: "Reference Guides",
//     url: "https://www.gatsbyjs.com/docs/reference/",
//     description:
//       "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
//     color: "#BC027F",
//   },
//   {
//     text: "Conceptual Guides",
//     url: "https://www.gatsbyjs.com/docs/conceptual/",
//     description:
//       "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
//     color: "#0D96F2",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//     color: "#000000",
//   },
// ]

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <div style={contentStyle}>
        <div style={{
          ...commonStyles.flex.rowStart,
        }}>
          <div style={{
            ...commonStyles.flex.flex(1)
          }}>
            <MyPhoto style={{
              ...commonStyles.paddings.marginRight('1rem'),
              ...commonStyles.paddings.marginTop('1rem'),
            }}/>
          </div>
          <div style={{
            ...commonStyles.flex.flex(1.4),
            ...commonStyles.flex.column,
            ...commonStyles.flex.justifyContentSpaceEvenly,
            ...commonStyles.font.color('#003B84'),
          }}>
            <p style={{
              ...commonStyles.font.fontSize('2.5em'),
            }}>Hi</p>
            <p style={{
              ...commonStyles.font.fontSize('1.75em'),
            }}>my name is Nikita</p>
            <p style={{
              ...commonStyles.font.fontSize('1.25em'),
            }}>and I'm a Salesforce Craftsman</p>
          </div>
        </div>

        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'NChursinSF'
          }}
          options={{
            height: '500'
          }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage