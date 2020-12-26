import * as React from "react"

import { MyPhoto } from '../components'
import { Layout } from '../templates'
import commonStyles from '../styles'

// styles
const contentStyle = {
  ...commonStyles.flex.column,
  ...commonStyles.flex.justifyContentCenter,
  ...commonStyles.font.color('#003B84'),
  width: '100%',
}

// markup
export default () => {
  return (
    <Layout>
      <title>About</title>
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
            ...commonStyles.flex.flex(4),
            ...commonStyles.flex.column,
            ...commonStyles.flex.justifyContentSpaceEvenly,
          }}>
            <p>
              I work as a fullstack developer at Deutsche Bank. By “fullstack” I mean
              I do requirements analysis, development, test automation, production
              delivery and support. And it happened to be that my main expertise is
              Salesforce.
            </p>
          </div>
        </div>
        <p>
          Being a Moscow Salesforce Community Group Leader, I work on spreading
          extreme programming practices among Salesforce developers. That is probably
          the best way to develop software and it defeinitely helps producing cleaner
          working code. I also share the values expressed in Manifesto for Software Craftsmanship.
        </p>
        <p>
          Since I started with Salesforce in 2013, that has been my primary technology.
          I worked in different roles along the way from a developer to solution architect.
          I feel like the architects, who don’t touch code can’t be really responsible for solutioning.
          You have to understand the development to be able to design a deliverable solution.
          Also, that is one of the reasons I work as a developer.
        </p>
        <p>
          Apart from Salesforce I love Javascipt. I worked as a NodeJS developer for some time
          and I’m also working on some VSCode extensions. I have several open-source projects
          in NodeJS and Python, though I don’t code in Python regularly anymore.
        </p>
      </div>
    </Layout>
  )
}
