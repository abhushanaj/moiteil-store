import { gql } from 'graphql-request';

export const GET_ALL_PRODUCTS = gql`
	query getAllProducts {
		products {
			id
			name
			slug
			isLatest
			isPopular
			thumbnail {
				url
			}
		}
	}
`;
