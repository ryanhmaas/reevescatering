import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div>
      {instaEdges.map(edge => {
        let node = edge.node
        let hasImg = node.thumbnails.length > 0
        let imgSrc = ""

        //to-do: switch to Gatsby-image
        if (hasImg) {
          imgSrc = node.thumbnails[0].src
        }
        return (
          <div>
            <span>{node.caption}</span>
            <img src={imgSrc} />
          </div>
        )
      })}
    </div>
  )
}

export default SectionInstagram
