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

export const GET_CATEGORY_DETAILS_BY_LINK = gql`
	query getCategoryDetails($categoryLink: String!) {
		categoriesList(where: { categoryLink: $categoryLink }) {
			id
			name
			categoryLink
			products {
				id
				name
				thumbnail {
					url
				}
			}
		}
	}
`;
