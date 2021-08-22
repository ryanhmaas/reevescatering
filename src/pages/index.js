import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../../assets/styles/main.scss';

import SectionGrid from '../components/SectionGrid';
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
						linkStyle
						linkSourceInternal {
							... on ContentfulPageContact {
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
							linkStyle
							linkSourceExternal
							linkIconPlacement
							linkIcon
							linkSourceInternal {
								... on ContentfulPageContact {
									id
									slug
								}
								... on ContentfulPageSingle {
									id
									slug
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
									linkStyle
									linkSourceExternal
									linkSourceInternal {
										... on ContentfulPageContact {
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
								linkStyle
								linkSourceExternal
								linkSourceInternal {
									... on ContentfulPageContact {
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
					<div className="c-content__wrapper">
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
	</Layout>
);

export default IndexPage;
