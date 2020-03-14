import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer';
import '../../assets/styles/main.scss';
import HyperionFooter from "./HyperionFooter";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment style={{backgroundColor: '#F1F2F4'}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
      >
        <main>{children}</main>
        <Footer />
        <HyperionFooter />
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
