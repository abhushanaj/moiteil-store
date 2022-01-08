import type { Image } from '../Image';

export type Product = {
	id: string;
	name: string;
	slug: string;
	thumbnail: Image;
};

export type CategoryProductSummary = Product;
