import { gql } from 'graphql-request';

/* Fragments */
import { PRODUCT_DETAILS_FRAGMENT } from '../fragments/products';
import { IMAGE_FRAGMENT } from '../fragments/image';

export const GET_LATEST_PRODUCTS = gql`
	query getLatestProducts($first: Int) {
		products(first: $first, where: { isLatest: true }) {
			...ProductDetails
			thumbnail {
				...ImageDetails
			}
		}
	}

	${PRODUCT_DETAILS_FRAGMENT}
	${IMAGE_FRAGMENT}
`;

export const GET_POPULAR_PRODUCTS = gql`
	query getLatestProducts($first: Int) {
		products(first: $first, where: { isPopular: true }) {
			...ProductDetails
			thumbnail {
				...ImageDetails
			}
		}
	}

	${PRODUCT_DETAILS_FRAGMENT}
	${IMAGE_FRAGMENT}
`;
