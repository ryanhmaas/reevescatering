module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Ryan Maas`,
    siteUrl: `https://reevescatering.netlify.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-netlify-cache',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i66t8ty4fjxp`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.REEVES_CONTENTFUL_API_KEY,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Euphoria Script`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Open Sans Condensed`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Euphoria Script`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
