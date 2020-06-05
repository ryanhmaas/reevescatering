import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"

function SectionInstagram() {
  const instagramData = useStaticQuery(graphql`
    query InstaQuery {
      allInstaNode(limit: 4, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            caption
            localFile {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  let instaEdges = instagramData.allInstaNode.edges

  return (
    <Carousel
      className="c-slider -instagram"
      infiniteLoop
      centerMode
      centerSlidePercentage={30}
    >
      {instaEdges.map(edge => {
        let node = edge.node

        return (
          <figure className="c-slider__insta-item">
            <Img
              className="c-slider__insta-img"
              fixed={node.localFile?.childImageSharp?.fixed}
            />
            <figcaption className="c-slider__insta-caption">
              {node.caption}
            </figcaption>
          </figure>
        )
      })}
    </Carousel>
  )
}

export default SectionInstagram
