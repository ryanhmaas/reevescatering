import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer';
import '../../assets/styles/main.scss';
import HyperionFooter from "./HyperionFooter";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      hyperionLogo: file(relativePath: {eq: "hyperion-logo-white.svg"}) {
        publicURL
      }
      reevesWhiteLogo: contentfulAsset(title: {eq: "Reeves Catering White Logo"}){
        file{
          url
        }
      }
    }
  `)
  return (
    <React.Fragment>
        <>
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
