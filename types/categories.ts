import type { Image } from './image';
import type { Product } from './products';

export type Category = {
	id: string;
	name: string;
	categoryLink: string;
	categoryImage: Image;
};

export type CategoryDetailsWithProducts = Omit<Category, 'categoryImage'> & {
	products: Product[];
};
