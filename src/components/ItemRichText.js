import React from "react"

function ItemRichText(props) {
  const richText = props
  const html = richText.richText.childMarkdownRemark.html

  console.log(richText);

  return (
    <div className="c-rich-text" dangerouslySetInnerHTML={{__html: html}}></div>
  )
}

export default ItemRichText
