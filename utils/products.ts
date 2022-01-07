import type { Product } from '../types/Product';

/* Helper function to filter out  products by category type */
export function filterProductsBy(products: Product[], type: 'popular' | 'latest'): Product[] {
	return products.filter((product) => {
		return product[type === 'popular' ? 'isPopular' : 'isLatest'];
	});
}
