import type { NextPage } from 'next';

/* COmponents */
import Breadcrumb from '../../components/Breadcrumb';

const CategoryPage: NextPage = () => {
	return (
		<main style={{ minHeight: '100vh' }}>
			<Breadcrumb
				currentPath={[
					{ href: '/category/men', label: 'Category', isActive: false, isDisabled: true },
					{ href: '/category/women', label: 'Men', isActive: true, isDisabled: false }
				]}
			/>
		</main>
	);
};

export default CategoryPage;
