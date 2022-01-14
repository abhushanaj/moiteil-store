/* Styles */
import { ProductSizeListOption, ProductSizeListWrapper } from './index.styles';

type Props = {
	sizeChoices: string[];
};

function ProductSizeList(props: Props) {
	const { sizeChoices } = props;

	return (
		<ProductSizeListWrapper>
			{sizeChoices.map((sizeChoice) => {
				return <ProductSizeListOption key={sizeChoice}>{sizeChoice}</ProductSizeListOption>;
			})}
		</ProductSizeListWrapper>
	);
}

export default ProductSizeList;
