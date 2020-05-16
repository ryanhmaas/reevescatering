import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/pro-solid-svg-icons"
function SectionCTA(props) {
  const { data } = props
  console.log(data)
  const { callToActionBorder, callToActionTitle, callToActionButton } = data

  const { linkName, linkIcon, linkIconPlacement } = callToActionButton
  return (
    <div className="section--cta">
      <div className="section--cta__title">{callToActionTitle}</div>
      <button className="section--cta__btn">
        {linkName}
        <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#fff" }} />
      </button>
    </div>
  )
}

export default SectionCTA
