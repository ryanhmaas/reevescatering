import React from "react"

const SectionDivider = props => {
  const dividerType = props.data.dividerType.toLowerCase().replace(/ /g, "")

  if (dividerType === "blankspace") {
    return (<div className="section-spacer"></div>)
  } else {
    return (
      <div
        className="section-divider  fade-in"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="40"
          height="24"
          viewBox="0 0 40 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0L25.4511 11.5079L20 23.0158L14.5489 11.5079L20 0Z"
            fill="currentColor"
          />
          <path
            d="M6.06937 5.45117L8.94433 11.5205L6.06937 17.5899L3.19441 11.5205L6.06937 5.45117Z"
            fill="currentColor"
          />
          <path
            d="M33.9306 5.45117L36.8056 11.5205L33.9306 17.5899L31.0557 11.5205L33.9306 5.45117Z"
            fill="currentColor"
          />
        </svg>
      </div>
    )
  }
}

export default SectionDivider
