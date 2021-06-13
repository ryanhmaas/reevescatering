module.exports = {
	siteMetadata: {
		title: `Reeves Catering`,
		description: `Simple to extravagant, we make it happen!`,
		author: `Ryan Maas`,
		siteUrl: `https://reevescatering.netlify.com/`
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-background-image-es5',
			options: {
				specialChars: '/:'
			}
		},
		{
			resolve: 'gatsby-plugin-react-leaflet',
			options: {
				linkStyles: false // (default: true) Enable/disable loading stylesheets via CDN
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#60973A`,
				theme_color: `#60973A`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
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
				useNameForId: true
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Cormorant Garamond\:300,400,700`,
					`Open Sans\:300,400,700`,
					`Open Sans Condensed\:300,400,700`,
					`Tangerine\:300,400,700`,
				]
			}
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `reevescatering`,
				access_token:
					'EAAIoPUkJ9KMBALHIqZCQcyapujt5L9oZAZBi8t5dUv8psR9sdjLILkXZBh4bbdBeYVCiIgevsQ0P5MoVAKlFzq3Afr9yQlc1ZBCN13xmSVdL9ctxG1ZB6caD5I7rfHZAL4ZAcZAxZA9yQm3SdXJPMN27Fz5QQQGhrVxZA2lSpBy4gv4IGPahU70E7hIY3LfjuqqFGyHQPvUp3UPPAZDZD',
				instagram_id: '17841400241165626',
				paginate: 5,
				maxPosts: 5
			}
		}
	]
};
