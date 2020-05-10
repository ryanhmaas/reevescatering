import React from "react"
import PropTypes from "prop-types"

function SectionSlider({ data }) {
  const { displaySliderName, sliderItems, sliderName } = data
  return <div>{"slider name" + sliderName} </div>
}

export default SectionSlider
