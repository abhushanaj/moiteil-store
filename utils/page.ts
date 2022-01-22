/* Helper function to generate page URl from slug */
export function generatePageUrlFromSlug(slug: string) {
	const BASE_URL = 'https://moiteil-store.vercel.app';

	if (slug === '/') {
		return `${BASE_URL}`;
	}

	return `${BASE_URL}/${slug}`;
}
