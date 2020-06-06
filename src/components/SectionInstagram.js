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
                fixed(height: 200, width: 200) {
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
    <>
      <Carousel
        className="c-slider -instagram -hide-tablet"
        infiniteLoop
        centerMode
        centerSlidePercentage={100 / 5}
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

      <Carousel
        className="c-slider -instagram -show-tablet -hide-mobile"
        infiniteLoop
        centerMode
        centerSlidePercentage={100 / 3}
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
      
      <Carousel
        className="c-slider -instagram -show-mobile"
        infiniteLoop
        centerMode
        centerSlidePercentage={100}
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
    </>
  )
}

export default SectionInstagram
