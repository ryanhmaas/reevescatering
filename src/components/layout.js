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
    }
  `)
  return (
    <React.Fragment>
      <>
        <TopBar />
        <main>{children}</main>
        <Footer reevesLogo={data.reevesWhiteLogo} />
        <HyperionFooter logo={data.hyperionLogo} />
      </>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
