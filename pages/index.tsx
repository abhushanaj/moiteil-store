import type { NextPage, GetStaticProps } from 'next';

/* Lib */
import { getBannerDetails } from '../lib/GraphCMS/functions/banner';
import { getCategoriesList } from '../lib/GraphCMS/functions/categories';

/* Components */
import CTABanner from '../components/CTABanner';
import CategoriesList from '../components/CategoriesList';
import FeaturesSection from '../components/FeaturesSection';
import ProductsGrid from '../components/ProductsGrid';

/* Types */
import type { CtaContent } from '../types/Banner';
import type { Category } from '../types/Categories';

type Props = {
	ctaBannerContent: CtaContent;
	categoriesLists: Category[];
};

const Home: NextPage<Props> = (props) => {
	const { ctaBannerContent, categoriesLists } = props;

	return (
		<main style={{ minHeight: '100vh' }}>
			<CTABanner ctaBannerContent={ctaBannerContent} />
			<ProductsGrid />
			<CategoriesList categoryLists={categoriesLists} />
			<FeaturesSection />
		</main>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		// get the contents to cta banner
		const { ctaBanners } = await getBannerDetails();
		const { categoriesLists } = (await getCategoriesList()) ?? null;

		// get all categories details home page

		return {
			props: {
				ctaBannerContent: ctaBanners[0] ?? null,
				categoriesLists: categoriesLists ?? null
			}
		};

		// on error pass null to all props
	} catch (err) {
		console.error('Error getting CTA Banner content', err);
		return {
			props: {
				ctaBannerContent: null,
				categoriesLists: null
			}
		};
	}
};

export default Home;
