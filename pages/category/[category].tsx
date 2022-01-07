import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

/* Components */
import Breadcrumb from '../../components/Breadcrumb';
import CategoryBanner from '../../components/CategoryBanner';
import ContentLayout from '../../components/Layout/ContentLayout';

/* Lib */
import { getCategoriesList, getDetailsByCategoryLink } from '../../lib/GraphCMS/functions/categories';

/* Utils */
import { formatCategoryLink } from '../../utils/category';

type Props = {
	categoryName: string;
	categorySlug: string;
};
const CategoryPage: NextPage<Props> = (props) => {
	const { categoryName, categorySlug } = props;

	return (
		<main style={{ minHeight: '100vh' }}>
			<CategoryBanner>
				<h1>{categoryName}</h1>
			</CategoryBanner>

			<ContentLayout>
				<Breadcrumb
					style={{ transform: 'translateY(-20px)' }}
					currentPath={[
						{ href: '/category', label: 'Category', isActive: false, isDisabled: true },
						{ href: categorySlug, label: categoryName, isActive: true, isDisabled: false }
					]}
				/>
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
		// format the category link from paths to a valid slug
		const catgoryLink = `/category/${params?.category || ''}`;

		const { categoriesList } = (await getDetailsByCategoryLink(catgoryLink)) ?? null;

		// if no details found based on category link, return 404
		if (!categoriesList) {
			return {
				notFound: true
			};
		}

		// else return all the details
		return {
			props: {
				id: categoriesList.id,
				categoryName: categoriesList.name,
				categorySlug: categoriesList.categoryLink
			}
		};
	} catch (err) {
		console.error('Error fetching details for category', err);
	}
	return {
		props: {
			data: []
		}
	};
};
