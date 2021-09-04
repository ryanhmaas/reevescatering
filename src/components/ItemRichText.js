import React from "react"
import { Link } from "gatsby"
import ItemIcon from "../components/ItemIcon"

function ItemRichText(props) {
  const richText = props
  const html = richText.richText?.childMarkdownRemark?.html
  const button = richText.richTextButtons
  const justify = richText.richTextJustification?.toLowerCase()
  let buttonClass = ""
  let align = justify==='center' ? 'center' : ''

  return (
    <>
      <div
        className="c-rich-text js-build-in"
        style={{ textAlign: justify}}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <div className="c-rich-text__c-btn-wrapper" style={{textAlign: align}}>
        {button
          ? button.map((btn, index) => {
              if (btn.linkStyle) {
                buttonClass = "c-btn -" + btn.linkStyle
              } else {
                buttonClass = "c-btn"
              }
              return (
                <React.Fragment key={`c-rich-text__c-btn-wrapper-${index}-${buttonClass}`}>
                  {btn.linkType.toLowerCase() === "internal page" && (
                    <Link
                      className={buttonClass}
                      style={{}}
                      to={
                        btn.linkSourceInternal
                          ? btn.linkSourceInternal.slug
                          : ""
                      }
                    >
                      {btn.linkName} <ItemIcon iconName={btn.linkIcon} />
                    </Link>
                  )}
                  {btn.linkType.toLowerCase() === "external website" && (
                    <a
                      className={buttonClass}
                      style={{}}
                      href={
                        btn.linkSourceExternal ? btn.linkSourceExternal : ""
                      }
                      target="_blank"
                      name={btn.linkName}
                      rel="noopener noreferrer"
                    >
                      {btn.linkName} <ItemIcon iconName={btn.linkIcon} />
                    </a>
                  )}
                </React.Fragment>
              )
            })
          : null}
      </div>
    </>
  )
}

export default ItemRichText
