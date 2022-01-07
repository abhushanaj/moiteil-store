import { styled } from '../../stitches.config';
import type { StitchesCSS } from '../../stitches.config';

export const ProductCardWrapper = styled('div', {
	border: '1px solid',
	borderColor: '$gray6',
	padding: '1.2rem',
	borderRadius: '$10',
	width: '100%',
	boxShadow: '$3',
	height: '100%'
});

export const ProductImage = styled('div', {
	bgColor: '$primaryTeal',
	borderRadius: '$8',
	overflow: 'hidden',
	width: '100%',
	display: 'grid',
	placeItems: 'center'
});

export const ProductContent = styled('div', {
	my: '1rem',
	fontSize: '$16',
	fontWeight: '$medium',

	h2: {
		font: 'inherit'
	}
});

export const viewProductStyles: StitchesCSS = {
	mt: '2rem',
	fontWeight: '$semiBold',
	color: '$primaryOrange',
	display: 'inline-block',
	fontSize: '$16',

	'&::after': {
		content: '',
		display: 'block',
		height: '3px',
		borderRadius: '$2',
		bgColor: 'rgba(255,255,255,0.3)',
		width: '0%',
		transition: 'width 0.3s ease-in-out'
	},

	'&:hover': {
		'&::after': {
			bgColor: 'currentColor',
			width: '100%'
		}
	}
};
