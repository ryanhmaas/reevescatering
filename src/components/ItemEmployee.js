import React, { useState } from "react"
import Img from "gatsby-image"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"

function ItemEmployee(props) {
  const [modalOpen, setModalOpen] = useState(false)
  const { employeeName, employeePicture, employeeRole, employeeBio } = props
  const html = employeeBio?.richText?.childMarkdownRemark?.html

  const onOpenModal = () => {
    setModalOpen(true)
  }
  const onCloseModal = () => {
    setModalOpen(false)
  }

  const handleKeyDown = (ev) => {
    // check keys if you want
    if (ev.keyCode === 13) {
      setModalOpen(true);
    }
  }

  return (
    <div className="employee-grid__item">
      <div className="employee-container">
        {employeePicture && employeePicture.fluid != null && (
          <div role="presentation" className="image-container" onClick={() => onOpenModal()} onKeyDown={handleKeyDown}>
            <Img
              fluid={employeePicture.fluid}
              className="employee-pic"
              alt="test"
            />
            <div className="employee-ds">
              <p className="employee-ds__name">{employeeName}</p>
              <p>Role</p>
            </div>
          </div>
        )}
        <div className="employee-details">
          <div>
            <b>{employeeName}</b>
          </div>
          <div>Role</div>
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => onCloseModal()} center>
        <div className="employee-modal">
          <img
            src={employeePicture.file?.url}
            alt="test"
            height="175"
            width="175"
          />
          <div>
            <h2>{employeeName}</h2>
            <p dangerouslySetInnerHTML={{ __html: html }}></p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ItemEmployee
