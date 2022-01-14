import { memo } from 'react';

/* Styles */
import { Swatch, SwatchList } from './index.styles';

type Props = {
	colorChoices: string[];
	selectedColor: string;
	onColorChange: (colorChoice: string) => void;
};

function ColorSwatchList(props: Props) {
	const { colorChoices, selectedColor, onColorChange } = props;

	return (
		<SwatchList>
			{colorChoices.map((colorChoice) => {
				return (
					<Swatch
						key={colorChoice}
						style={{ background: colorChoice }}
						selected={selectedColor === colorChoice}
						title={colorChoice}
						onClick={() => onColorChange(colorChoice)}
					/>
				);
			})}
		</SwatchList>
	);
}

export default memo(ColorSwatchList);
