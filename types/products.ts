import type { Image } from './image';

export type Product = {
	id: string;
	name: string;
	slug: string;
	thumbnail: Image;
};
