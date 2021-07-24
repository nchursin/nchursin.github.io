import * as React from "react"

import YouTube from 'react-youtube'

import { Layout } from '../templates'
import { Image } from '../components'
import commonStyles from '../styles'

const events = [
  {
    key: 'lc21',
    title: 'Injecting Quality: How To Prevent Defects During Development',
    description: `
      London’s Calling is the largest community-led event for Salesforce
      professionals with over 400 in-person attendees and 8000 virtual attendees.

      I've spoken about how we implement XP and BDD for Salesforce development
      to prevent defects in our team at Deutsche Bank Tech Centre.
    `,
    language: 'English',
    videoId: 'NRpjSGvwqjU',
  },
  {
    key: 'msk1',
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

const preview = (evt) => {
  if (evt.videoId) {
    return <YouTube videoId={evt.videoId} opts={videoOpts} />
  } else if (evt.preview) {
    return (
      <div style={{ minWidth: `25rem` }}>
        <Image filename={evt.preview} />
      </div>
    )
  }
}

const eventComponent = (evt) => (
  <div key={evt.key} style={{
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
        {preview(evt)}
      </div>
      <p style={{
        ...commonStyles.flex.flex('5')
      }}>
        {evt.description}
        <br/>
        <br/>
        <i>Language: {evt.language}</i>
      </p>
    </div>
    <p/>
  </div>
)

// markup
export default () => {
  return (
    <Layout title="Speaking">
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
