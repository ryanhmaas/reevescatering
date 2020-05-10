import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

import ContentSection from '../components/ContentSection';
import SectionGrid from '../components/SectionGrid';
import SectionInstagram from '../components/SectionInstagram';
import SectionSlider from '../components/SectionSlider';
import { CONTENTFUL_SECTION_TYPES } from '../constants/enums';

export const query = graphql`
	query($slug: String!) {
		contentfulPageSingle(slug: { eq: $slug }) {
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
							richText
						}
						richTextButtons {
							linkName
							linkSourceExternal
							linkIconPlacement
							linkIcon
							linkSourceInternal {
								pageName
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
									richText
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
					sliderItems {
						... on ContentfulApiReviews {
							id
						}
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

function SinglePage({ data }) {
	console.log(data);

	const ContentfulSectionContent = (props) => {
		return <ContentSection props={props} />;
	};

	return (
		<Layout>
			{data.contentfulPageSingle.pageSections.map((section) => {
				let typeName = section['__typename'];
				switch (typeName) {
					case CONTENTFUL_SECTION_TYPES.CONTENT:
						return <ContentfulSectionContent />;
					case CONTENTFUL_SECTION_TYPES.CTA:
						return <div>CTA component here</div>;
					case CONTENTFUL_SECTION_TYPES.DIVIDER:
						return <div>Divider component here</div>;
					case CONTENTFUL_SECTION_TYPES.GRID:
						return <SectionGrid data={section} />;
					case CONTENTFUL_SECTION_TYPES.INSTAGRAM:
						return <SectionInstagram />;
					case CONTENTFUL_SECTION_TYPES.SLIDER:
						return <SectionSlider data={section} />;
					default:
						return <div>aaaabbbcc</div>;
				}
			})}
		</Layout>
	);
}

export default SinglePage;
