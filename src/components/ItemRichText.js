import React from "react"
import { Link } from "gatsby"
import ItemIcon from "../components/ItemIcon"

function ItemRichText(props) {
  const richText = props 
  const html = richText.richText.childMarkdownRemark.html
  const button = richText.richTextButtons
  let buttonClass;


  console.log(richText);

  return (
    <>
      <div className="c-rich-text" dangerouslySetInnerHTML={{__html: html}}></div>
      <div className="c-rich-text__c-btn-wrapper">
      {button ? button.map((btn) => {
        if (btn.linkStyle) {
          buttonClass = "c-btn -"+btn.linkStyle
        } else {
          buttonClass = "c-btn"
        }
        return (
          <>
            {btn.linkType.toLowerCase() === 'internal page' &&
              <Link className={buttonClass} to={btn.linkSourceInternal ? btn.linkSourceInternal.slug : ''}>{btn.linkName} <ItemIcon iconName={btn.linkIcon} /></Link>
            }
            {btn.linkType.toLowerCase() === 'external page' &&
              <a className={buttonClass} href={btn.linkSourceExternal ? btn.linkSourceExternal : ''} target="_blank" name={btn.linkName}>{btn.linkName} <ItemIcon iconName={btn.linkIcon} /></a>
            }
          </>
            )
          }) : null 
        }
      </div>
    </>
  )
}

export default ItemRichText
