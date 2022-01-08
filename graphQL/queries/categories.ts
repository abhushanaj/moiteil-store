import { gql } from 'graphql-request';
import { IMAGE_FRAGMENT } from '../fragments/image';

/* Fragments */
import { CATEGORY_DETAILS_FRAGMENT } from '../fragments/categories';
import { PRODUCT_DETAILS_FRAGMENT } from '../fragments/products';

export const GET_CATEGORIES_LIST = gql`
	query getCategoriesList($first: Int) {
		categoriesLists(first: $first) {
			...CategoryDetails

			categoryImage {
				...ImageDetails
			}
		}
	}

	${CATEGORY_DETAILS_FRAGMENT}
	${IMAGE_FRAGMENT}
`;

export const GET_CATEGORY_DETAILS_BY_LINK = gql`
	query getCategoryDetails($categoryLink: String!) {
		categoriesList(where: { categoryLink: $categoryLink }) {
			...CategoryDetails

			products {
				...ProductDetails

				thumbnail {
					...ImageDetails
				}
			}
		}
	}

	${CATEGORY_DETAILS_FRAGMENT}
	${PRODUCT_DETAILS_FRAGMENT}
	${IMAGE_FRAGMENT}
`;
