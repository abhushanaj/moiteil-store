import type { NextPage, GetStaticProps } from 'next';

/* Lib */
import { getBannerDetails } from '../lib/GraphCMS/functions/banner';
import { getCategoriesList } from '../lib/GraphCMS/functions/categories';
import { getAllProducts } from '../lib/GraphCMS/functions/products';

/* Utils */
import { filterProductsBy } from '../utils/products';

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
	products: Product[];
};

const Home: NextPage<Props> = (props) => {
	const { ctaBannerContent, categoriesLists, products } = props;

	return (
		<main style={{ minHeight: '100vh' }}>
			<CTABanner ctaBannerContent={ctaBannerContent} />

			<ProductsGrid title="Most Popular" productsList={filterProductsBy(products, 'popular')} />

			<CategoriesList categoryLists={categoriesLists} />

			<ProductsGrid title="Latest Products" productsList={filterProductsBy(products, 'latest')} />

			<FeaturesSection />
		</main>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		// get the contents to cta banner
		const { ctaBanners } = await getBannerDetails();
		const { categoriesLists } = (await getCategoriesList({ first: 4 })) ?? null;
		const { products } = (await getAllProducts()) ?? null;

		return {
			props: {
				ctaBannerContent: ctaBanners[0] ?? null,
				categoriesLists,
				products
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
