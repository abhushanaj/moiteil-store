import type { Image } from '../Image';
import type { CategoryProductSummary } from '../Product';

export type Category = {
	id: string;
	name: string;
	categoryLink: string;
	categoryImage: Image;
};

export type CategoryDetails = Omit<Category, 'categoryImage'> & {
	products: CategoryProductSummary[];
};
