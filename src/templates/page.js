import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SectionContent from "../components/SectionContent"
import { CONTENTFUL_SECTION_TYPES } from "../constants/enums"

export const query = graphql`
  query($slug: String!) {
    contentfulPageSingle(slug: { eq: $slug }) {
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
            file {
              url
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
            ... on ContentfulApiReviews {
              id
            }
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
`

function SinglePage({ data }) {
  console.log(data)

  const ContentfulSectionContent = props => {
    return <SectionContent props={props} />
  }

  return (
    <Layout>
      {data.contentfulPageSingle.pageSections.map(section => {
        let typeName = section["__typename"]
        switch (typeName) {
          case CONTENTFUL_SECTION_TYPES.CONTENT:
            return <ContentfulSectionContent />
          case CONTENTFUL_SECTION_TYPES.CTA:
            return <div>CTA component here</div>
          case CONTENTFUL_SECTION_TYPES.DIVIDER:
            return <div>Divider component here</div>
          case CONTENTFUL_SECTION_TYPES.GRID:
            return <div>Grid component here</div>
          case CONTENTFUL_SECTION_TYPES.INSTAGRAM:
            return <div>insta component here</div>
          case CONTENTFUL_SECTION_TYPES.SLIDER:
            return <div>slider component here</div>
          default:
            return <div>aaaabbbcc</div>
        }
      })}
    </Layout>
  )
}

export default SinglePage
