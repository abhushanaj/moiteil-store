import { graphCMSClient } from '..';

/* GQL Queries */
import { GET_LATEST_PRODUCTS, GET_POPULAR_PRODUCTS } from '../../../graphQL/queries/products';

/* Types */
import { Product } from '../../../types/products';

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
