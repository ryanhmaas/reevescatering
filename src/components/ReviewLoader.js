import React from "react"
import ContentLoader from "react-content-loader"

const ReviewLoader = props => (
  <div className="loader-container">
    <ContentLoader
      speed={2}
      width={450}
      height={160}
      backgroundColor="#e8e8e8"
      foregroundColor="#949494"
      {...props}
    >
      <circle cx="10" cy="20" r="8" />
      <rect x="25" y="15" rx="5" ry="5" width="450" height="15" />
      <circle cx="10" cy="50" r="8" />
      <rect x="25" y="45" rx="5" ry="5" width="450" height="15" />
      <circle cx="10" cy="80" r="8" />
      <rect x="25" y="75" rx="5" ry="5" width="450" height="15" />
    </ContentLoader>
  </div>
)

export default ReviewLoader
