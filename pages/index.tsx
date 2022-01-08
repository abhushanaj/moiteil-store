import type { NextPage, GetStaticProps } from 'next';

/* Lib */
import { getBannerDetails } from '../lib/GraphCMS/functions/banner';
import { getCategoriesList } from '../lib/GraphCMS/functions/categories';
import { getFilteredProducts } from '../lib/GraphCMS/functions/products';

/* Components */
import CTABanner from '../components/CTABanner';
import CategoriesList from '../components/CategoriesList';
import FeaturesSection from '../components/FeaturesSection';
import ProductsGrid from '../components/ProductsGrid';

/* Types */
import type { CtaContent } from '../types/Banner';
import type { Category } from '../types/Categories';
import type { Product } from '../types/Product';

type Props = {
	ctaBannerContent: CtaContent;
	categoriesLists: Category[];
	latestProducts: Product[];
	popularProducts: Product[];
};

const Home: NextPage<Props> = (props) => {
	const { ctaBannerContent, categoriesLists, latestProducts, popularProducts } = props;

	return (
		<main style={{ minHeight: '100vh' }}>
			<CTABanner ctaBannerContent={ctaBannerContent} />

			<ProductsGrid title="Most Popular" productsList={popularProducts} />

			<CategoriesList categoryLists={categoriesLists} />

			<ProductsGrid title="Latest Products" productsList={latestProducts} />

			<FeaturesSection />
		</main>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		// get the contents to cta banner
		const { ctaBanners } = await getBannerDetails();

		// get first 4 categories list
		const { categoriesLists } = (await getCategoriesList({ first: 4 })) ?? [];

		// get first 8 products filtered by isLatest flag
		const { products: latestProducts } = (await getFilteredProducts({ first: 8, isLatest: true })) ?? [];

		const { products: popularProducts } = (await getFilteredProducts({ first: 8, isPopular: true })) ?? [];

		return {
			props: {
				ctaBannerContent: ctaBanners[0] ?? null,
				categoriesLists,
				latestProducts,
				popularProducts
			}
		};

		// on error pass null to all props
	} catch (err) {
		console.error('Error getting CTA Banner content', err);
		return {
			props: {
				ctaBannerContent: null,
				categoriesLists: null,
				products: null
			}
		};
	}
};

export default Home;
