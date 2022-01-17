import { graphCMSClient } from '..';

/* GQL Queries */
import {
	GET_LATEST_PRODUCTS,
	GET_POPULAR_PRODUCTS,
	GET_PRODUCTS,
	GET_PRODUCT_DETAILS_BY_SLUG
} from '../../../graphQL/queries/products';

/* Types */
import { Product, ProductWithoutThumnbail, ProductWithVariants } from '../../../types/products';

type FilterProductsPayload = {
	first?: number;
	isLatest?: boolean;
	isPopular?: boolean;
};

/* Helper function to get products based on flags isLatest and isFeatured */
export async function getFilteredProducts(payload?: FilterProductsPayload): Promise<{ products: Product[] | [] }> {
	// if requested for popular products

	if (payload?.isPopular) {
		return graphCMSClient.request(GET_POPULAR_PRODUCTS, { first: payload?.first });
	}

	// get latest products
	if (payload?.isLatest) {
		return graphCMSClient.request(GET_LATEST_PRODUCTS, { first: payload?.first });
	}

	// return products
	return { products: [] };
}

type ProductPayload = {
	first: number;
};

/* Helper function to get products to generate dynamic routes */
export async function getProducts(payload?: ProductPayload): Promise<{ products: ProductWithoutThumnbail[] | [] }> {
	return graphCMSClient.request(GET_PRODUCTS, { first: payload?.first });
}

/* Helper function to get product all product details based on slug */
export async function getProductDetailsBySlug(nameSlug: string): Promise<{ product: ProductWithVariants | null }> {
	return graphCMSClient.request(GET_PRODUCT_DETAILS_BY_SLUG, { slug: nameSlug });
}
