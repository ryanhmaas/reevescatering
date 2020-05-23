import React from "react"
import ItemAward from "../components/ItemAward"
import ItemRichText from "../components/ItemRichText"

function SectionSlider({ data }) {
  //sectionType is the slider type - contentful will not rename it once pub'd :/
  const { displaySliderName, sliderItems, sliderName, sectionType } = data

  const sliderItem = props => {
    if (sectionType === "Award") {
      return <ItemAward {...props} />
    } else {
      return <ItemRichText data={props} />
    }
  }

  return (
    <div>
      <div>{"slider name" + sliderName}</div>
      <div>{"displaySliderName" + displaySliderName}</div>
      {sliderItems.length > 0 && (
        <div>
          {sliderItems.map(item => {
            return <div>{sliderItem(item)}</div>
          })}
        </div>
      )}
    </div>
  )
}

export default SectionSlider
