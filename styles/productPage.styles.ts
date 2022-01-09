import { styled } from '../stitches.config';
import type { StitchesCSS } from '../stitches.config';

export const detailsLayout: StitchesCSS = {
	display: 'grid',
	gridTemplateColumns: 'repeat(2,1fr)'
};

export const ProductVariantImages = styled('div', {});

export const ProductVariantDetails = styled('div', {
	bgColor: '$gray1',
	minHeight: '30rem',
	width: 'max-content',
	borderRadius: '$10',
	py: '3rem',
	px: '3.5rem',
	boxShadow: '$3',

	h1: {
		fontSize: '$36'
	}
});

export const SwatchList = styled('ul', {
	listStyle: 'none',
	display: 'flex',
	alignItems: 'center',
	flexWrap: 'wrap',
	my: '1rem'
});

export const Swatch = styled('li', {
	width: '1.5rem',
	height: '1.5rem',
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
