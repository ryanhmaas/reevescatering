/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const slash = require(`slash`)

exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions }) => {
  switch (stage) {
    case "build-html":
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-leaflet/,
              use: [loaders.null()],
            },
          ],
        },
      })
      break
  }
}

/*
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    union ContentSection = ContentfulSectionContent | ContentfulSectionDivider | ContentfulSectionInstagram | ContentfulSectionGrid | ContentfulSectionSlider

    type ContentfulPageSingle implements Node {
      pageSections: [ContentSection]
    }

    type ContentfulSectionContent implements Node
      @childOf(types: ["ContentfulPageSingle"]){
        id: ID!
    }

  `
  createTypes(typeDefs)
}*/

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      query {
        allContentfulPageSingle {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }
      // Resolve the paths to our template
      const pageTemplate = path.resolve("./src/templates/page.js")
      // Then for each result we create a page.

      result.data.allContentfulPageSingle.edges.forEach(edge => {
        if (edge.node.slug !== "home") {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        }
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
