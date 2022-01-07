import { styled } from '../../stitches.config';
import type { StitchesCSS } from '../../stitches.config';

export const ProductsGridLayout = styled('div', {
	my: '5rem'
});

export const ProductsGridTitle = styled('h1', {
	fontSize: '$42',
	textAlign: 'center',
	my: '5rem'
});

export const ProductCardWrapper = styled('div', {
	border: '1px solid',
	borderColor: '$gray6',
	padding: '1.6rem',
	borderRadius: '$10',
	width: 'max-content',
	boxShadow: '$3',
	minWidth: '30rem'
});

export const ProductImage = styled('div', {
	bgColor: '$secondaryOrange',
	borderRadius: '$8',
	overflow: 'hidden',
	width: '100%'
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
