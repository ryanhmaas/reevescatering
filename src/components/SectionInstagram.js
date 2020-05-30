import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from 'react-responsive-carousel';

function SectionInstagram() {
  const instagramData = useStaticQuery(graphql`
    query InstaQuery {
      allInstaNode(limit: 4, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            caption
            thumbnails {
              src
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
        let hasImg = node.thumbnails.length > 0
        let imgSrc = ""

        //to-do: switch to Gatsby-image
        if (hasImg) {
          imgSrc = node.thumbnails[0].src
        }
        return (
          <figure className="c-slider__insta-item">
            <img className="c-slider__insta-img" src={imgSrc} />
            <figcaption className="c-slider__insta-caption">{node.caption}</figcaption>
          </figure>
        )
      })}
    </Carousel>
  )
}

export default SectionInstagram
