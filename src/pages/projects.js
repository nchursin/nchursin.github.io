import * as React from "react"

import { Layout } from '../templates'
import commonStyles from '../styles'

const projects = [
  {
    title: 'Apex Lightbulbs',
    description: `
      I really miss my old project "Apex Intention Actions" for Sublime Text.
      I started working on implementing the same functionality for VSCode.
      The idea is to allow quick refactoring actions for Apex, like creating
      a method override, adding a constructor parameter, etc.
    `,
    url: 'https://github.com/nchursin/apex-lightbulbs',
  },
  {
    title: 'VSCode Apex PMD',
    description: `
      This is a project by Charlie Jonas from Callaway Consulting. I try to contribute
      regularly there, though it is not always happens. I volunteered to maintain the
      project when Charlie was out, but now he's again the main contributor.
    `,
    url: 'https://github.com/ChuckJonas/vscode-apex-pmd',
  },
  {
    title: 'Apex MockServer',
    description: `
      This was previsouly a part of my Clean Code Apex lib. This is a wrapper around
      Apex's HttpCallout Mock. What I see is everyone try to come up with their own
      mock server functionality. So I decided to create a lib for everyone to use :)
    `,
    url: null,
  },
]

const projectComponent = (projectData) => (
  <div>
    <h2>{projectData.title}</h2>
    <p>{projectData.description}</p>
    <p><i>Repository: {
      projectData.url
      ?
        <a href={projectData.url} target="_blank">{projectData.title}</a>
      :
        'to be linked'
    }</i></p>
  </div>
)

// markup
export default () => {
  return (
    <Layout title="Projects">
      <div style={{
        ...commonStyles.flex.column
      }}>
        <p>
          Apart from ocasional commits to different open-source projects, I have
          several that I (try to) work on a regular basis.
        </p>
        <p/>
        {projects.map(projectComponent)}
      </div>
    </Layout>
  )
}
