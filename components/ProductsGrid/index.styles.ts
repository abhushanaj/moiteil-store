import { styled } from '../../stitches.config';

export const ProductsGridLayout = styled('ul', {
	my: '5rem',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch'
});

export const GridLayoutItem = styled('li', {
	width: '25%',
	listStyle: 'none',
	padding: '1.2rem',

	'@media only screen and (max-width:1000px)': {
		width: '33.33%'
	},

	'@media only screen and (max-width:850px)': {
		width: '50%'
	},

	'@media only screen and (max-width:550px)': {
		width: '100%'
	}
});

export const ProductsGridTitle = styled('h1', {
	fontSize: '$42',
	textAlign: 'center',
	my: '5rem',

	'@media only screen and (max-width:850px)': {
		fontSize: '$36'
	}
});
