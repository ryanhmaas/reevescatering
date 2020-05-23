import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image-es5"
import ItemRichText from "../components/ItemRichText"

function SectionContent({ data }) {
  const { contentLayout, contentRichText, contentImage } = data
  let layout = contentLayout.toLowerCase()
  let richText = contentRichText
  let imageData = contentImage

  return (
    <section class="c-content">
      {layout === "rich text only" && <ItemRichText {...richText} />}
      {layout === "image on left" && (
        <>
          <p>image on left</p>
          <ItemRichText {...richText} />
        </>
      )}
      {layout === "image on right" && (
        <>
          <p>image on right</p>
          <ItemRichText {...richText} />
        </>
      )}
      {layout === "image as background (banner)" && (
        <>
           {/* Should change this to BackgroundImage component once fluid is working */}
           <div
            className="c-background-img -banner"
            ariaName="background image"
          >
            <figure className="c-background-img__banner-img" style={{backgroundImage: 'url('+imageData.file.url+')'}}></figure>
            <div className="c-background-img__content">
              <ItemRichText {...richText} />
            </div>
          </div>
        </>
      )}
      {layout === "image as background (full screen)" && (
        <>
          {/* Should change this to BackgroundImage component once fluid is working */}
          <figure
            style={{
              backgroundImage: "url(" + imageData.file.url + ")",
            }}
            className="c-background-img -full"
            ariaName="background image"
          >
            <figcaption className="c-background-img__content u-container">
              <ItemRichText {...richText} />
            </figcaption>
          </figure>
        </>
      )}
    </section>
  )
}

export default SectionContent
