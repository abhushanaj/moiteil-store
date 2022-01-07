/* Styles */
import {
	viewProductStyles,
	ProductCardWrapper,
	ProductContent,
	ProductImage,
	ProductsGridLayout,
	ProductsGridTitle
} from './index.styles';

/* Components */
import ContentLayout from '../Layout/ContentLayout';
import GraphCMSImage from '../GraphCMSImage';
import InternalLink from '../InternalLink';

function ProductsGrid() {
	return (
		<ContentLayout as="section">
			<ProductsGridTitle>Latest Products</ProductsGridTitle>
			<ProductsGridLayout>
				<ProductCardWrapper>
					<ProductImage>
						<GraphCMSImage width={260} height={260} src="https://media.graphcms.com/3YIOeAdTa6B31nqoo2Hy" />
					</ProductImage>

					<ProductContent>
						<h2>Unisex T-Shirt</h2>
						<p>
							<strong>$ 18.00</strong>
						</p>

						<InternalLink href="/category/product-name" style={viewProductStyles}>
							View Product
						</InternalLink>
					</ProductContent>
				</ProductCardWrapper>
			</ProductsGridLayout>
		</ContentLayout>
	);
}

export default ProductsGrid;
