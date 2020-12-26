import * as React from "react"

import YouTube from 'react-youtube'

import { Layout } from '../templates'
import commonStyles from '../styles'

const events = [
  {
    title: 'Salesforce DevOps: Joy At Release',
    description: `
      One of the first events at Moscow Community
      "Salesforce DevOps: Joy At Release, Einstein Bots and Einstein AI with our Einstein".
      I've spoken about principles that will allow you to do your releases easier.
    `,
    language: 'Russian',
    videoId: 'zuo-wTYFcxI',
  },
]

const videoOpts = {
  height: '243',
  width: '400',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
}

const eventComponent = (evt) => (
  <div style={{
    ...commonStyles.flex.column
  }}>
    <h2>{evt.title}</h2>
    <div style={{
      ...commonStyles.flex.rowStart
    }}>
      <div style={{
        ...commonStyles.flex.flex('1'),
        ...commonStyles.paddings.marginRight('2rem')
      }}>
        <YouTube videoId={evt.videoId} opts={videoOpts} />
      </div>
      <p style={{
        ...commonStyles.flex.flex('5')
      }}>
        {evt.description}
        <p>
          <i>Language: {evt.language}</i>
        </p>
      </p>
    </div>
    <p/>
  </div>
)

// markup
export default () => {
  return (
    <Layout>
      <title>Speaking</title>
      <div style={{
        ...commonStyles.flex.column
      }}>
        <p>
          I ocasionally speak at different events, both Salesforce related and not.
          Here are links to some of them.
        </p>
        <p/>
        {events.map(eventComponent)}
      </div>
    </Layout>
  )
}
