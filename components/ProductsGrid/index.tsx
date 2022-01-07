/* Styles */
import { GridLayoutItem, ProductsGridLayout, ProductsGridTitle } from './index.styles';

/* Components */
import ContentLayout from '../Layout/ContentLayout';

import type { Product } from '../../types/Product';
import ProductOverview from '../ProductOverview';

type Props = {
	title: string;
	productsList: Product[];
};

function ProductsGrid(props: Props) {
	const { title, productsList } = props;

	return (
		<ContentLayout as="section" style={{ my: '12rem' }}>
			<ProductsGridTitle>{title}</ProductsGridTitle>
			<ProductsGridLayout>
				{productsList.map((product) => {
					return (
						<GridLayoutItem key={product.id}>
							<ProductOverview name={product.name} thumbnail={product.thumbnail} slug={product.slug} />
						</GridLayoutItem>
					);
				})}
			</ProductsGridLayout>
		</ContentLayout>
	);
}

export default ProductsGrid;
