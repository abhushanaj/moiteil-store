import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

/* Styling */
import {
	AsideWrapper,
	CategoryBannerTile,
	CategoryNavigationList,
	CategoryNavigationListItem,
	CategoryProductsGridItem,
	CategoryProductsGridLayout,
	pageLayoutStyles
} from '../../styles/categoryPage.styles';

/* Lib */
import { getCategoriesList, getDetailsByCategoryLink } from '../../lib/GraphCMS/functions/categories';

/* Utils */
import { formatCategoryLink } from '../../utils/category';

/* Components */
import ContentLayout from '../../components/Layout/ContentLayout';
import Breadcrumb from '../../components/Breadcrumb';
import ProductOverview from '../../components/ProductOverview';
import InternalLink from '../../components/InternalLink';

/* Types */
import type { Category, CategoryDetails } from '../../types/Categories';

type Props = {
	allCategories: Category[];
	categoryWithProducts: CategoryDetails;
};

const CategoryPage: NextPage<Props> = (props) => {
	const { categoryWithProducts, allCategories } = props;

	return (
		<main style={{ minHeight: '100vh' }}>
			<CategoryBannerTile>
				<h1>{categoryWithProducts.name}</h1>
			</CategoryBannerTile>

			{/* Page breadcrumb */}
			<ContentLayout>
				<Breadcrumb
					style={{ transform: 'translateY(-20px)' }}
					currentPath={[
						{ href: '/category', label: 'Category', isActive: false, isDisabled: true },
						{
							href: categoryWithProducts.categoryLink,
							label: categoryWithProducts.name,
							isActive: true,
							isDisabled: false
						}
					]}
				/>
			</ContentLayout>

			{/*  Page content */}
			<ContentLayout style={pageLayoutStyles} as="section">
				{/*  Aside navigation and newsletter  */}
				<AsideWrapper>
					<h1>Categories</h1>
					<CategoryNavigationList>
						{allCategories.map((category) => {
							return (
								<CategoryNavigationListItem
									key={category.id}
									active={category.categoryLink === categoryWithProducts.categoryLink}
								>
									<InternalLink href={category.categoryLink}>{category.name}</InternalLink>
								</CategoryNavigationListItem>
							);
						})}
					</CategoryNavigationList>
				</AsideWrapper>

				{/*  Grid Layout for the category products */}
				<CategoryProductsGridLayout>
					{categoryWithProducts.products.map((product) => {
						return (
							<CategoryProductsGridItem key={product.id}>
								<ProductOverview
									key={product.id}
									name={product.name}
									thumbnail={product.thumbnail}
									slug={product.slug}
								/>
							</CategoryProductsGridItem>
						);
					})}
				</CategoryProductsGridLayout>
			</ContentLayout>
		</main>
	);
};

export default CategoryPage;

// Get all categories path
export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { categoriesLists } = (await getCategoriesList()) ?? [];

		const paths = categoriesLists.map((categoryItem) => {
			return {
				params: {
					category: formatCategoryLink(categoryItem.categoryLink)
				}
			};
		});

		return {
			paths,
			fallback: false
		};
	} catch (err) {
		console.error('Error fetching paths for the product');
		return {
			paths: [],
			fallback: false
		};
	}
};

// Get data for the following category page
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		// get all the categories to show as sidebar on page
		const { categoriesLists: allCategories } = (await getCategoriesList()) ?? [];

		// fetch all products and category details based on page slug

		// format the category link from paths to a valid slug
		const catgoryLink = `/category/${params?.category || ''}`;
		const { categoriesList: categoryWithProducts } = (await getDetailsByCategoryLink(catgoryLink)) ?? null;

		// if no details found based on category link, return 404
		if (!categoryWithProducts) {
			return {
				notFound: true
			};
		}

		// else return all the details
		return {
			props: {
				allCategories,
				categoryWithProducts
			}
		};
	} catch (err) {
		console.error('Error fetching details for category', err);
		return {
			props: {
				categoryWithProducts: [],
				allCategory: []
			}
		};
	}
};
