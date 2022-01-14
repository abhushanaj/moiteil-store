import { memo } from 'react';

/* Styles */
import { Swatch, SwatchList } from './index.styles';

type Props = {
	colorChoices: string[];
	selectedColor: string;
	handleSwatchClick: (colorChoice: string) => void;
};

function ColorSwatchList(props: Props) {
	const { colorChoices, selectedColor, handleSwatchClick } = props;

	return (
		<SwatchList>
			{colorChoices.map((colorChoice) => {
				return (
					<Swatch
						key={colorChoice}
						style={{ background: colorChoice }}
						selected={selectedColor === colorChoice}
						title={colorChoice}
						onClick={() => handleSwatchClick(colorChoice)}
					/>
				);
			})}
		</SwatchList>
	);
}

export default memo(ColorSwatchList);
