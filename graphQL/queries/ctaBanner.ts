import { gql } from 'graphql-request';

export const GET_CTA_BANNER_CONTENT = gql`
	query getCTABannerContent {
		ctaBanners(first: 1) {
			subHeading
			heading
			ctaLink
			ctaCoverImage {
				url
			}
		}
	}
`;
