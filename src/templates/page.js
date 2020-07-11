import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SectionContent from '../components/SectionContent';

import SectionGrid from '../components/SectionGrid';
import SectionInstagram from '../components/SectionInstagram';
import SectionSlider from '../components/SectionSlider';
import { CONTENTFUL_SECTION_TYPES } from '../constants/enums';
import SectionCTA from '../components/SectionCTA';
import SectionDivider from '../components/SectionDivider';
import SectionList from '../components/SectionList';
import SEO from '../components/seo';
import ApiReviews from '../components/ApiReviews';

export const query = graphql`
	query($slug: String!) {
		contentfulPageSingle(slug: { eq: $slug }) {
			pageName
			slug
			pageSections {
				... on ContentfulApiReviews {
					reviewsTitle
				}
				... on ContentfulSectionList {
					displayTitle
					title
					listItems {
						vendorType
						venueDescription
						venueName
						websiteLink
					}
				}
				... on ContentfulSectionCallToAction {
					id
					callToActionBorder
					callToActionTitle
					callToActionButton {
						linkIcon
						linkIconPlacement
						linkSourceExternal
						linkName
						linkStyle
						linkSourceInternal {
							... on ContentfulContactUsPage {
								id
								slug
							}
							... on ContentfulPageSingle {
								id
								slug
							}
						}
					}
				}
				... on ContentfulSectionDivider {
					id
					dividerType
				}
				... on ContentfulSectionContent {
					id
					contentName
					contentLayout
					contentImage {
						file {
							url
						}
						localFile {
							publicURL
						}
						fluid {
							...GatsbyContentfulFluid
						}
					}
					contentRichText {
						richText {
							childMarkdownRemark {
								html
							}
						}
						richTextButtons {
							linkName
							linkSourceExternal
							linkIconPlacement
							linkIcon
							linkStyle
							linkSourceInternal {
								... on ContentfulContactUsPage {
									id
									pageName
								}
								... on ContentfulPageSingle {
									id
									pageName
								}
							}
							linkType
						}
						richTextJustification
					}
				}
				... on ContentfulSectionGrid {
					id
					displayGridName
					gridName
					gridType
					gridItems {
						... on ContentfulItemEmployee {
							id
							employeeName
							employeePicture {
								file {
									url
								}
								fluid {
									...GatsbyContentfulFluid
								}
							}
							employeeRole
							employeeBio {
								richText {
									richText
									childMarkdownRemark {
										html
									}
								}
								richTextButtons {
									linkIcon
									linkIconPlacement
									linkName
									linkSourceExternal
									linkSourceInternal {
										... on ContentfulContactUsPage {
											id
											slug
										}
										... on ContentfulPageSingle {
											id
											slug
										}
									}
								}
								richTextJustification
							}
						}
						... on ContentfulItemIcon {
							id
							displayIconName
							faIcon
							iconName
						}
						... on ContentfulItemVendor {
							id
							venueDescription
							venueName
							websiteLink
							venueImage {
								file {
									url
								}
								fluid(maxWidth: 325, maxHeight: 325) {
									...GatsbyContentfulFluid
								}
							}
						}
					}
				}
				... on ContentfulSectionSlider {
					id
					displaySliderName
					sectionType
					sliderItems {
						... on ContentfulItemAward {
							id
							awardDescription
							awardTitle
						}
						... on ContentfulItemRichText {
							id
							richText {
								richText
							}
						}
					}
					sliderName
				}
			}
		}
	}
`;

const capitalize = (s) => {
	return s.toLowerCase().replace(/\b./g, function(a) {
		return a.toUpperCase();
	});
};

const formatSlug = (slug) => {
	return capitalize(slug.replace('-', ' '));
};

function SinglePage({ data }) {
	let hasSections = data.contentfulPageSingle.pageSections && data.contentfulPageSingle.pageSections.length > 0;
	if (!hasSections) {
		return <Layout>No sections configured yet.</Layout>;
	}
	return (
		<Layout>
			<SEO title={formatSlug(data.contentfulPageSingle.slug)} />

				{data.contentfulPageSingle.pageSections.map((section) => {
					let typeName = section['__typename'];
					switch (typeName) {
						case CONTENTFUL_SECTION_TYPES.CONTENT:
							return <SectionContent data={section} />;
						case CONTENTFUL_SECTION_TYPES.CTA:
							return <SectionCTA data={section} />;
						case CONTENTFUL_SECTION_TYPES.DIVIDER:
							return <SectionDivider data={section} />;
						case CONTENTFUL_SECTION_TYPES.GRID:
							return <SectionGrid data={section} />;
						case CONTENTFUL_SECTION_TYPES.INSTAGRAM:
							return <SectionInstagram />;
						case CONTENTFUL_SECTION_TYPES.SLIDER:
							return <SectionSlider data={section} />;
						case CONTENTFUL_SECTION_TYPES.LIST:
							return <SectionList data={section} />;
						case CONTENTFUL_SECTION_TYPES.API_REVIEWS:
							return <ApiReviews />;
						default:
							return <div />;
					}
				})}
		</Layout>
	);
}

export default SinglePage;
