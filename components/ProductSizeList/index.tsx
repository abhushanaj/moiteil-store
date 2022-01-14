import { memo } from 'react';

/* Styles */
import { ProductSizeListOption, ProductSizeListWrapper } from './index.styles';

/* Utils */
import { formatSizeChoice } from '../../utils/product';

type Props = {
	sizeChoices: string[];
	selectedSize: string;
	onSizeChange: (size: string) => void;
};

function ProductSizeList(props: Props) {
	const { sizeChoices, selectedSize, onSizeChange } = props;

	return (
		<ProductSizeListWrapper>
			{sizeChoices.map((sizeChoice) => {
				return (
					<ProductSizeListOption
						key={sizeChoice}
						selected={selectedSize === sizeChoice}
						onClick={() => onSizeChange(sizeChoice)}
					>
						{formatSizeChoice(sizeChoice)}
					</ProductSizeListOption>
				);
			})}
		</ProductSizeListWrapper>
	);
}

export default memo(ProductSizeList);
