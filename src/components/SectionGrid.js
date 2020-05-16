import React from "react"
import classNames from "classnames"
import ItemVenue from "./ItemVenue"
import ItemIcon from "./ItemIcon"
import ItemEmployee from "./ItemEmployee"

function SectionGrid({ data }) {
  const { displayGridName, gridName, gridItems, gridType } = data

  // todo - move switch checks to constants
  const gridItem = props => {
    if (gridType === "VenueGrid") {
      return <ItemVenue {...props} />
    } else if (gridType === "EmployeeGrid") {
      return <ItemEmployee {...props} />
    } else {
      return <ItemIcon {...props} />
    }
  }

  const showGridItems = gridItems.length > 0
  return (
    <section className="grid--section">
      {"grid name: " + gridName}
      {"display grid:" + displayGridName}
      {"item length" + gridItems.length}
      {showGridItems && (
        <div
          className={classNames("grid", {
            "employee--grid": gridType === "EmployeeGrid",
          })}
        >
          {gridItems.map((item, index) => {
            return gridItem(item)
          })}
        </div>
      )}
    </section>
  )
}

export default SectionGrid
