import type { Image } from '../Image';
import { Product } from '../Product';

export type Category = {
	id: string;
	name: string;
	categoryLink: string;
	categoryImage: Image;
};

export type CategoryDetails = Category & {
	products: Product[];
};
