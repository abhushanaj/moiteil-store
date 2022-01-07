import { graphCMSClient } from '..';

/* GQL Queries */
import { GET_ALL_PRODUCTS } from '../../../graphQL/queries/products';

/* Types */
import { Product } from '../../../types/Product';

/* Helper function to get all products */
export async function getAllProducts(): Promise<{ products: Product[] }> {
	return graphCMSClient.request(GET_ALL_PRODUCTS);
}
