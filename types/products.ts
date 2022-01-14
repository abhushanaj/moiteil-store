import type { ProductColor } from './color';
import type { Image } from './image';

export type Product = {
	id: string;
	name: string;
	slug: string;
	thumbnail: Image;
};

export type ProductVariant = {
	id: string;
	price: number;
	color: ProductColor;
	size: string[];
	catelogImages: Image[];
};

export type ProductWithoutThumnbail = Omit<Product, 'thumbnail'>;
export type ProductWithVariants = ProductWithoutThumnbail & { productVariants: ProductVariant[] };
