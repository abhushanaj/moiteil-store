import type { Image } from '../Image';

export type Product = {
	id: string;
	name: string;
	slug: string;
	isLatest: boolean;
	isPopular: boolean;
	thumbnail: Image;
};
