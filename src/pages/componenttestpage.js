import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionContent from "../components/SectionContent"
import SectionDivider from "../components/SectionDivider"

function ComponentTestPage() {
  const data = useStaticQuery(graphql`
    query TestQuery {
      contentfulPageSingle(slug: { eq: "home" }) {
        pageName
        slug
        pageSections {
          ... on ContentfulSectionCallToAction {
            id
            callToActionBorder
            callToActionTitle
            callToActionButton {
              linkIcon
              linkIconPlacement
              linkSourceExternal
              linkName
              linkSourceInternal {
                slug
              }
            }
          }
          ... on ContentfulSectionDivider {
            id
            dividerType
          }
          ... on ContentfulSectionContent {
            id
            contentName
            contentLayout
            contentImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            contentRichText {
              richText {
                richText
              }
              richTextButtons {
                linkName
                linkSourceExternal
                linkIconPlacement
                linkIcon
                linkSourceInternal {
                  pageName
                }
                linkType
              }
              richTextJustification
            }
          }
          ... on ContentfulSectionGrid {
            id
            displayGridName
            gridName
            gridItems {
              ... on ContentfulItemEmployee {
                id
                employeeName
                employeePicture {
                  file {
                    url
                  }
                  title
                }
                employeeRole
                employeeBio {
                  richText {
                    richText
                  }
                  richTextButtons {
                    linkIcon
                    linkIconPlacement
                    linkName
                    linkSourceExternal
                    linkSourceInternal {
                      slug
                    }
                  }
                  richTextJustification
                }
              }
              ... on ContentfulItemIcon {
                id
                displayIconName
                faIcon
                iconName
              }
              ... on ContentfulItemVenue {
                id
                venueDescription
                venueName
                venueImage {
                  file {
                    url
                  }
                }
              }
            }
          }
          ... on ContentfulSectionSlider {
            id
            displaySliderName
            sliderItems {
              ... on ContentfulItemAward {
                id
                awardDescription
                awardTitle
              }
              ... on ContentfulItemRichText {
                id
                richText {
                  richText
                }
              }
            }
            sliderName
          }
        }
      }
    }
  `)

  return (
    <div>
      <SectionContent
        layout={data.contentfulPageSingle.pageSections[0].contentLayout}
        richText={
          data.contentfulPageSingle.pageSections[0].contentRichText.richText
            .richText
        }
        image={data.contentfulPageSingle.pageSections[0].contentImage.fluid}
      />
      <SectionDivider
        dividerType={data.contentfulPageSingle.pageSections[1].dividerType}
      />
    </div>
  )
}

export default ComponentTestPage
