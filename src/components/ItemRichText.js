import React from "react"

function ItemRichText(props) {
  const { richText } = props
  console.log(props)
  return <div>{"RICHTEXT: " + richText.richText}</div>
}

export default ItemRichText
