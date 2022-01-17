import { gql } from 'graphql-request';

export const PRODUCT_DETAILS_FRAGMENT = gql`
	fragment ProductDetails on Product {
		id
		name
		slug
	}
`;

export const PRODUCT_VARIANTS_FRAGMENT = gql`
	fragment ProductVariantsDetails on ProductVariant {
		id
		price
		color {
			hex
		}
		size
	}
`;
