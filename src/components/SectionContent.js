import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image-es5"

function SectionContent({ data }) {
  console.log(data)
  const { contentLayout, contentRichText, contentImage } = data
  let layout = contentLayout.toLowerCase()
  let richTextData = contentRichText
  let imageData = contentImage

  return <div>Content section needs updating</div>
  /*
  return (
    <section class="c-content">
      <BackgroundImage
        style={{ display: "block", height: "100px", width: "100px" }}
        Tag="figure"
        className="hero__bg-img flex flex-col items-center justify-center h-full w-full bg-fixed bg-no-repeat"
        fluid={imageData}
      ></BackgroundImage>
      {layout}
      {richTextData}
    </section>
  )*/
}

export default SectionContent
