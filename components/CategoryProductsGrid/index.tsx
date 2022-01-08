/* Styling */
import { CategoryProductsGridItem, CategoryProductsGridLayout } from './index.styles';

/* Coimponents */
import ProductOverview from '../ProductOverview';

/* Types */
import { CategoryProductSummary } from '../../types/Product';

type Props = {
	categoryProductsList: CategoryProductSummary[];
};

function CategoryProductsGrid(props: Props) {
	const { categoryProductsList } = props;

	return (
		<CategoryProductsGridLayout>
			{categoryProductsList.map((productItem) => {
				return (
					<CategoryProductsGridItem>
						<ProductOverview
							key={productItem.id}
							name={productItem.name}
							thumbnail={productItem.thumbnail}
							slug={productItem.slug}
						/>
					</CategoryProductsGridItem>
				);
			})}
		</CategoryProductsGridLayout>
	);
}

export default CategoryProductsGrid;
