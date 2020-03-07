import React from "react"
import { Link, graphql, StaticQuery  } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { styles } from '../../constants/styles';

const INDEX_PAGE_QUERY = graphql`
  query IndexPageDataQuery {
  sections: allContentfulHomePageSection {
    nodes {
      description {
        description
      }
      title
    }
  }
  hours: allContentfulCompanyHours {
    nodes {
      hoursOpen
    }
  }
}

`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p style={{fontFamily: styles.fonts.euphoriaScript}}>
      TestScript
    </p>
    <StaticQuery
        query={INDEX_PAGE_QUERY}
        render={({ hours }) => {
          return (
            <div className="columns is-multiline">
              {hours.nodes[0].hoursOpen}
            </div>
          )
        }}
      />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
