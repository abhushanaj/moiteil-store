import { gql } from 'graphql-request';

export const GET_CATEGORIES_LIST = gql`
	query getCategoriesList($first: Int) {
		categoriesLists(first: $first) {
			id
			name
			categoryLink
			categoryImage {
				url
			}
		}
	}
`;
