import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import ReviewLoader from "../components/ReviewLoader"

function ApiReviews() {
  const [reviewsHtml, setReviewsHtml] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getScripts()
  }, [])

  const getScripts = async () => {
    var date = new Date().getTime().toString()
    setIsLoading(true)
    await Promise.all([
      fetch(
        "https://www.weddingwire.com/widget/vendors/reviews?id=495083&color=red&" +
          date,
        {
          method: "GET",
          cache: "no-cache",
        }
      )
        .then(res => res.text())
        .then(data => {
          setReviewsHtml(data)
        }),
    ])
    setIsLoading(false)
  }

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://www.weddingwire.com/build/css/skins/weddingwire/widget.min.css"
        />
      </Helmet>
      <div id="wp-widget-reviews" className="review-container">
        {isLoading && <ReviewLoader />}
        {!isLoading && (
          <div dangerouslySetInnerHTML={{ __html: reviewsHtml }}></div>
        )}
      </div>
    </div>
  )
}

export default ApiReviews
