import type { NextPage, GetStaticProps } from 'next';

/* Styling */
import { CategoriesListGrid, GridLayoutItem, ProductsGridLayout, ProductsGridTitle } from '../styles/homePage.styles';

/* Lib */
import { getBannerDetails } from '../lib/GraphCMS/functions/banner';
import { getCategoriesList } from '../lib/GraphCMS/functions/categories';
import { getFilteredProducts } from '../lib/GraphCMS/functions/products';

/* Components */
import CTABanner from '../components/CTABanner';
import FeaturesSection from '../components/FeaturesSection';
import ContentLayout from '../components/Layout/ContentLayout';
import ProductOverview from '../components/ProductOverview';
import CategoryCard from '../components/CategoryCard';
import InternalLink from '../components/InternalLink';

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
			{/* CTA Marketing Banner */}
			<CTABanner ctaBannerContent={ctaBannerContent} />

			{/* Popular Products Section */}
			<ContentLayout as="section">
				<ProductsGridTitle>Most Popular</ProductsGridTitle>
				<ProductsGridLayout>
					{popularProducts.map((product) => {
						return (
							<GridLayoutItem key={product.id}>
								<ProductOverview name={product.name} thumbnail={product.thumbnail} slug={product.slug} />
							</GridLayoutItem>
						);
					})}
				</ProductsGridLayout>
			</ContentLayout>

			{/* Categories Cards Section */}
			<ContentLayout style={{ my: '10rem' }}>
				{/* First two cards */}
				<CategoriesListGrid grid="60-40">
					{categoriesLists
						.filter((category, index) => {
							return index < 2;
						})
						.map((category, index) => {
							return (
								<InternalLink href={category.categoryLink} key={category.id}>
									<CategoryCard small={index % 2 !== 0} title={category.name} coverImage={category.categoryImage.url} />
								</InternalLink>
							);
						})}
				</CategoriesListGrid>

				<CategoriesListGrid grid="40-60" css={{ mt: '3.2rem' }}>
					{categoriesLists
						.filter((category, index) => {
							return index >= 2;
						})
						.map((category, index) => {
							return (
								<InternalLink href={category.categoryLink} key={category.id}>
									<CategoryCard small={index % 2 === 0} title={category.name} coverImage={category.categoryImage.url} />
								</InternalLink>
							);
						})}
				</CategoriesListGrid>
			</ContentLayout>

			{/* Latest Products Section */}
			<ContentLayout as="section">
				<ProductsGridTitle>Latest Products</ProductsGridTitle>
				<ProductsGridLayout>
					{latestProducts.map((product) => {
						return (
							<GridLayoutItem key={product.id}>
								<ProductOverview name={product.name} thumbnail={product.thumbnail} slug={product.slug} />
							</GridLayoutItem>
						);
					})}
				</ProductsGridLayout>
			</ContentLayout>

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

		// get first 8 products filtered by isPopular flag
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
