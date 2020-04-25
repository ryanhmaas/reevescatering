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
      reevesWhiteLogo: file(relativePath: {eq: "reeves-catering-white.svg"}) {
        publicURL
      } 
    }
  `)
  console.log(data);
  return (
    <React.Fragment style={{backgroundColor: '#F1F2F4'}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
      >
        <main>{children}</main>
        <Footer reevesLogo={data.reevesWhiteLogo} />
        <HyperionFooter logo={data.hyperionLogo} />
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
