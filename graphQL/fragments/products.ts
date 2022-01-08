import { gql } from 'graphql-request';

export const PRODUCT_DETAILS_FRAGMENT = gql`
	fragment ProductDetails on Product {
		id
		name
		slug
	}
`;
