import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image-es5"
import ItemRichText from '../components/ItemRichText'

function SectionContent({ data }) {
  console.log(data)
  const { contentLayout, contentRichText, contentImage } = data
  let layout = contentLayout.toLowerCase()
  let richText = contentRichText
  let imageData = contentImage


  return (

    <section class="c-content">
      {layout === 'rich text only' &&
        <ItemRichText {...richText} />
      }
      {layout === 'image on left' &&
        <p>image on left</p>
      }
      {layout === 'image on right' &&
        <p>image on right</p>
      }
      {layout === 'image as background (banner)' &&
        <p>image as background (banner)</p>
      }
      {layout === 'image as background (full screen)' &&
        <p>image as background (full screen)</p>
      }
      
      {/* <BackgroundImage
        style={{ display: "block", height: "100px", width: "100px" }}
        Tag="figure"
        className="hero__bg-img flex flex-col items-center justify-center h-full w-full bg-fixed bg-no-repeat"
        fluid={imageData}
      ></BackgroundImage> */}
      
    </section>
  )

}

export default SectionContent
