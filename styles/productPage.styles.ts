import { styled } from '../stitches.config';
import type { StitchesCSS } from '../stitches.config';

export const detailsLayout: StitchesCSS = {
	display: 'grid',
	gridTemplateColumns: '3fr 1fr',
	alignItems: 'flex-start',
	my: '6rem',

	'@media only screen and (max-width:1200px)': {
		gridTemplateColumns: '1fr',
		justifyItems: 'center'
	}
};

export const ProductVariantImages = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	'@media only screen and (max-width:1200px)': {
		mb: '3rem'
	}
});

export const ProductVariantDetails = styled('div', {
	bgColor: '$gray1',
	height: 'max-content',
	width: 'max-content',
	borderRadius: '$10',
	py: '2rem',
	px: '2.5rem',
	alignSelf: 'center',
	boxShadow: '$3',

	h1: {
		fontSize: '$36',

		'@media only screen and (max-width:800px)': {
			fontSize: '$28'
		},

		'@media only screen and (max-width:650px)': {
			fontSize: '$24'
		}
	},

	'@media only screen and (max-width:800px)': {
		width: '100%'
	}
});
