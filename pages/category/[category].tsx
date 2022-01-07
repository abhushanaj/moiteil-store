import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

/* Components */
import Breadcrumb from '../../components/Breadcrumb';

/* Lib */
import { getCategoriesList } from '../../lib/GraphCMS/functions/categories';

/* Utils */
import { formatCategoryLink } from '../../utils/category';

const CategoryPage: NextPage = () => {
	return (
		<main style={{ minHeight: '100vh' }}>
			<Breadcrumb
				currentPath={[
					{ href: '/category', label: 'Category', isActive: false, isDisabled: true },
					{ href: '/category/men', label: 'Men', isActive: true, isDisabled: false }
				]}
			/>
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
export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			data: []
		}
	};
};
