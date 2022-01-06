import { gql } from 'graphql-request';

export const GET_CATEGORIES_LIST = gql`
	query getCategoriesList {
		categoriesLists {
			id
			name
			categoryLink
			categoryImage {
				url
			}
		}
	}
`;
