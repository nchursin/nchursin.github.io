import React from 'react';
import { StaticQuery, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Note: You can change "images" to whatever you'd like.



export default (props) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(props.filename);
  });
  if (!image) {
    return null;
  }

  const imageSizes = image.node.childImageSharp.sizes;
  console.log('imageSizes >> ', imageSizes)
  return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />;
}
