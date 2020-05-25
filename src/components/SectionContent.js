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
      {layout === "rich text only" && (
        <article className="c-content__c-rich-text-only c-rich-text-only">
          <div className="u-container">
            <ItemRichText {...richText} />
          </div>
        </article>
      )}

      {layout === "image on left" && (
        <figure className="c-content__c-img-text c-img-text u-container -lg">
          <div className="c-img-text__img-wrapper">
            <img className="c-img-text__img" src={imageData.file.url} />
          </div>
          <figcaption className="c-img-text__content">
            <ItemRichText {...richText} />
          </figcaption>
        </figure>
      )}

      {layout === "image on right" && (
        <figure className="c-content__c-img-text c-img-text -right u-container -lg">
        <figcaption className="c-img-text__content">
          <ItemRichText {...richText} />
        </figcaption>
        <div className="c-img-text__img-wrapper">
          <img className="c-img-text__img" src={imageData.file.url} />
        </div>
      </figure>
      )}

      {layout === "image as background (banner)" && (
        <>
           {/* Should change this to BackgroundImage component once fluid is working */}
           <div
            className="c-content__c-background-img c-background-img -banner"
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
            className="c-content__c-background-img c-background-img -full"
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
