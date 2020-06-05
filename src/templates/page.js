import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SectionContent from "../components/SectionContent"

import SectionGrid from "../components/SectionGrid"
import SectionInstagram from "../components/SectionInstagram"
import SectionSlider from "../components/SectionSlider"
import { CONTENTFUL_SECTION_TYPES } from "../constants/enums"
import SectionCTA from "../components/SectionCTA"
import SectionDivider from "../components/SectionDivider"

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
            localFile {
              publicURL
            }
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          contentRichText {
            richText {
              childMarkdownRemark {
                html
              }
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
          gridType
          gridItems {
            ... on ContentfulItemEmployee {
              id
              employeeName
              employeePicture {
                file {
                  url
                }
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              employeeRole
              employeeBio {
                richText {
                  richText
                  childMarkdownRemark {
                    html
                  }
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
          sectionType
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
`

function SinglePage({ data }) {
  let hasSections =
    data.contentfulPageSingle.pageSections &&
    data.contentfulPageSingle.pageSections.length > 0
  if (!hasSections) {
    return <Layout>No sections configured yet.</Layout>
  }
  return (
    <Layout>
      {data.contentfulPageSingle.pageSections.map(section => {
        let typeName = section["__typename"]
        switch (typeName) {
          case CONTENTFUL_SECTION_TYPES.CONTENT:
            return <SectionContent data={section} />
          case CONTENTFUL_SECTION_TYPES.CTA:
            return <SectionCTA data={section} />
          case CONTENTFUL_SECTION_TYPES.DIVIDER:
            return <SectionDivider data={section} />
          case CONTENTFUL_SECTION_TYPES.GRID:
            return <SectionGrid data={section} />
          case CONTENTFUL_SECTION_TYPES.INSTAGRAM:
            return <SectionInstagram />
          case CONTENTFUL_SECTION_TYPES.SLIDER:
            return <SectionSlider data={section} />
          default:
            return <div />
        }
      })}
    </Layout>
  )
}

export default SinglePage
