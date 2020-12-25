import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import commonStyles from '../styles'

export default () => {
  const mediumData = useStaticQuery(graphql`
    query MediumData {
      allMediumPost(sort: {fields: [createdAt], order: DESC}) {
        edges {
          node {
            id
            title
            uniqueSlug
            previewContent2 {
              bodyModel {
                paragraphs {
                  metadata {
                    id
                  }
                  layout
                  name
                  text
                  type
                }
              }
            }
          }
        }
      }
    }
    `)
  const mediumBaseUrl = 'https://salesforcecraft.medium.com'
  const mediumIamgeBaseUrl = 'https://miro.medium.com/max/1400'

  const nodes = mediumData.allMediumPost.edges.map((edge) => edge.node)
  const types = {
    TITLE: 'TITLE',
    TEXT: 'TEXT',
    IMAGE: 'IMAGE',
  }
  const typeMap = {
    1: types.TEXT,
    4: types.IMAGE,
  }

  const postData = nodes.map(
    (node) => ({
      ...node,
      url: `${mediumBaseUrl}/${node.uniqueSlug}`,
      preview: node.previewContent2.bodyModel.paragraphs.map(
        (paragraph) => ({
          ...paragraph,
          type: typeMap[paragraph.type],
          imageUrl: paragraph.metadata?.id ? `${mediumIamgeBaseUrl}/${paragraph.metadata?.id}` : null
        })
      ),
    })
  )

  return (
    <div>
      {postData.map(
        (post) => (
          <div style={{
            ...commonStyles.flex.column,
            ...commonStyles.flex.justifyContentStart,
          }}>
            <h1><Link to={post.url}>{post.title}</Link></h1>
            {post.preview.map((previewItem) => {
              switch (previewItem.type) {
                case types.IMAGE:
                  return;
                case types.TEXT:
                  return (
                    <p>
                      {previewItem.text}
                    </p>
                  )
                default:
                  return;
              }
            })}
          </div>
        )
      )}
    </div>
  )
}



