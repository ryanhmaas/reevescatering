import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../../assets/styles/main.scss';

import SectionGrid from '../components/SectionGrid';
import SectionInstagram from '../components/SectionInstagram';
import SectionSlider from '../components/SectionSlider';
import { CONTENTFUL_SECTION_TYPES } from '../constants/enums';
import SectionCTA from '../components/SectionCTA';
import SectionContent from '../components/SectionContent';
import SectionDivider from '../components/SectionDivider';

const INDEX_PAGE_QUERY = graphql`
	query IndexPageDataQuery {
		homePage: contentfulPageSingle(slug: { eq: "home" }) {
			pageName
			slug
			pageSections {
				... on ContentfulSectionCallToAction {
					id
					callToActionBorder
					callToActionTitle
					callToActionButton {
						linkIcon
						linkIconPlacement
						linkSourceExternal
						linkName
						linkSourceInternal {
							slug
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
							linkSourceInternal {
								slug
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
								title
							}
							employeeRole
							employeeBio {
								richText {
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
										slug
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
						... on ContentfulItemVenue {
							id
							venueDescription
							venueName
							venueImage {
								file {
									url
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
									slug
								}
							}
							richTextJustification
						}
					}
					sliderName
				}
			}
		}
	}
`;

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<StaticQuery
			query={INDEX_PAGE_QUERY}
			render={({ homePage }) => {
				return (
					<div className="columns is-multiline">
						{homePage.pageSections.map((section) => {
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
								default:
									return <div />;
							}
						})}
					</div>
				);
			}}
		/>
		<Link to="/page-2/">Go to page 2</Link>
	</Layout>
);

export default IndexPage;
