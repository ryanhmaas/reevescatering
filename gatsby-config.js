module.exports = {
	siteMetadata: {
		title: `Reeves Catering`,
		description: `Simple to extravagant, we make it happen!`,
		author: `Ryan Maas`,
		siteUrl: `https://reevescatering.netlify.com/`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
				once: true, // Defines if animation needs to be launched once
				disable: false, // Flag for disabling animations

				// Advanced Options
				selector: '[data-sal]', // Selector of the elements to be animated
				animateClassName: 'sal-animate', // Class name which triggers animation
				disabledClassName: 'sal-disabled', // Class name which defines the disabled state
				rootMargin: '0% 50%', // Corresponds to root's bounding box margin
				enterEventName: 'sal:in', // Enter event name
				exitEventName: 'sal:out', // Exit event name
			}
		},
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
	]
};
