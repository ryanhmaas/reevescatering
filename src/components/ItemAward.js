import React from "react"
import PropTypes from "prop-types"

function ItemAward(props) {
  console.log(props)
  return <div></div>
}

ItemAward.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
}

export default ItemAward
