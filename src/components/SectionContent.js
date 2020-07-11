import React from "react"
import ItemRichText from "../components/ItemRichText"
import Img from "gatsby-image"

function SectionContent({ data }) {
  const { contentLayout, contentRichText, contentImage } = data
  let layout = contentLayout.toLowerCase()
  let richText = contentRichText
  let imageData = contentImage

  return (
    <>
      {layout === "rich text only" && (
        <section className="c-content" style={{zIndex: 2}}>
          <article className="c-content__c-rich-text-only c-rich-text-only">
            <div className="u-container">
              <ItemRichText {...richText} />
            </div>
          </article>
        </section>
      )}

      {layout === "image on left" && (
        <section className="c-content" style={{zIndex: 1}}>
          <figure className="c-content__c-img-text c-img-text u-container -lg">
            <div className="c-img-text__img-wrapper">
              <Img className="c-img-text__img" fluid={imageData?.fluid} />
            </div>
            <figcaption className="c-img-text__content">
              <ItemRichText {...richText} />
            </figcaption>
          </figure>
        </section>
      )}

      {layout === "image on right" && (
        <section className="c-content" style={{zIndex: 1}}>
          <figure className="c-content__c-img-text c-img-text -right u-container -lg">
            <figcaption className="c-img-text__content">
              <ItemRichText {...richText} />
            </figcaption>
            <div className="c-img-text__img-wrapper" >
              <Img className="c-img-text__img" fluid={imageData?.fluid} />
            </div>
          </figure>
        </section>
      )}

      {layout === "image as background (banner)" && (
          <section className="c-content">
            <div
              className="c-content__c-background-img c-background-img -banner"
              arianame="background image"
            >
              <figure
                className="c-background-img__banner-img"
                style={{"--bg-image": "url(" + imageData.file.url + ")"}}
              ></figure>
              <div className="c-background-img__content" >
                <ItemRichText {...richText} />
              </div>
            </div>
          </section>
      )}

      {layout === "image as background (full screen)" && (
        <section className="c-content">
          <div className="c-background-img__wrapper -full">
            <figure
              style={{"--bg-image": "url(" + imageData.file.url + ")"}}
              className="c-content__c-background-img c-background-img -full"
              arianame="background image"
            ></figure>
            <div className="c-background-img__content u-container">
              <ItemRichText {...richText} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default SectionContent
