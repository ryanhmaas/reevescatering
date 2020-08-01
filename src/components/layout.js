import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import TopBar from "./TopBar"
import Footer from "./footer"
import "../../assets/styles/main.scss"
import HyperionFooter from "./HyperionFooter"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      socialLinks: allContentfulItemSocialMedia {
        nodes {
          url
          type
          name
        }
      }
      contactInfo: allContentfulItemContactInfo {
        nodes {
          type
          name
          value
        }
      }
      hyperionLogo: file(relativePath: { eq: "hyperion-logo-white.svg" }) {
        publicURL
        childImageSharp {
          fluid {
            src
          }
        }
      }
      reevesWhiteLogo: contentfulAsset(
        title: { eq: "Reeves Catering White Logo" }
      ) {
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      header: contentfulNavigationConfig(title: { eq: "Header" }) {
        id
        title
        navigationSections {
          groupName
          ... on ContentfulNavigationGroup {
            id
            groupType
            navLinkRef {
              linkName
              downloadFile {
                file {
                  url
                }
              }
              linkSourceExternal
              linkSourceInternal {
                ... on ContentfulPageSingle {
                  slug
                }
                ... on ContentfulPageContact {
                  slug
                }
              }
            }
          }
        }
      }
      footer: contentfulNavigationConfig(title: { eq: "Footer" }) {
        id
        title
        navigationSections {
          groupName
          groupType
          ... on ContentfulNavigationGroup {
            id
            navLinkRef {
              linkName
              linkSourceExternal
              downloadFile {
                file {
                  url
                }
              }
              linkSourceInternal {
                ... on ContentfulPageSingle {
                  slug
                }
                ... on ContentfulPageContact {
                  slug
                }
              }
            }
          }
        }
      }
    }
  `)

  const nav = data.header?.navigationSections
  const footer = data.footer?.navigationSections
  const socialLinks = data.socialLinks?.nodes || []
  const contactInfo = data.contactInfo?.nodes || []
  // console.log(nav);

  return (
    <React.Fragment>
      <>
        <TopBar data={nav} reevesLogo={data.reevesWhiteLogo} />
        <main>{children}</main>
        <Footer
          data={footer}
          reevesLogo={data.reevesWhiteLogo}
          socialLinks={socialLinks}
          contactInfoData={contactInfo}
        />
        <HyperionFooter logo={data.hyperionLogo} />
      </>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
