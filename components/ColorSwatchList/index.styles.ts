import { styled } from '../../stitches.config';

export const SwatchList = styled('ul', {
	listStyle: 'none',
	display: 'flex',
	alignItems: 'center',
	flexWrap: 'wrap',
	my: '1rem'
});

export const Swatch = styled('li', {
	width: 'max-content',
	height: 'max-content',
	mr: '1rem',
	borderRadius: '$99999',
	padding: '1rem',

	borderColor: '$gray1',
	cursor: 'pointer',

	variants: {
		selected: {
			true: {
				border: '4px solid $primaryOrange'
			}
		}
	}
});
