import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"

function SectionInstagram({ data }) {

  const {instagramName, displayInstagramName} = data

  const instagramData = useStaticQuery(graphql`
    query InstaQuery {
      allInstaNode(limit: 4, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            caption
            localFile {
              childImageSharp {
                fixed {
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
    {displayInstagramName && 
      <h3 className="c-slider__title" style={{textAlign: 'center'}}>{instagramName}</h3>
    }
      <Carousel
        className="c-slider -instagram -hide-tablet"
        infiniteLoop
        centerMode
        centerSlidePercentage={100 / 5}
      >
        {instaEdges.map(edge => {
          let node = edge.node
          let cap = node.caption.substring(0, 150) + '...';
          return (
            <figure className="c-slider__insta-item">
              <Img
                className="c-slider__insta-img"
                fixed={node.localFile?.childImageSharp?.fixed}
              />
              <figcaption className="c-slider__insta-caption">
                {cap}
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
