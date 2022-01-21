import { gql } from 'graphql-request';

/* Fragments */
import { PRODUCT_DETAILS_FRAGMENT, PRODUCT_VARIANTS_FRAGMENT } from '../fragments/products';
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

export const GET_PRODUCTS = gql`
	query getAllProducts($first: Int) {
		products(first: $first) {
			...ProductDetails
		}
	}

	${PRODUCT_DETAILS_FRAGMENT}
`;

export const GET_PRODUCT_DETAILS_BY_SLUG = gql`
	query getProductDetailsBySlug($slug: String!) {
		product(where: { slug: $slug }) {
			...ProductDetails
			description

			productVariants {
				...ProductVariantsDetails

				catelogImages {
					...ImageDetails
				}
			}
		}
	}

	${PRODUCT_DETAILS_FRAGMENT}
	${PRODUCT_VARIANTS_FRAGMENT}
	${IMAGE_FRAGMENT}
`;
