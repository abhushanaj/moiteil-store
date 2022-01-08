import { StitchesCSS, styled } from '../stitches.config';

/* Products Grid Styles */
export const ProductsGridTitle = styled('h1', {
	fontSize: '$42',
	textAlign: 'center',
	my: '5rem',

	'@media only screen and (max-width:850px)': {
		fontSize: '$36'
	}
});

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

/* Categories Section Styles */
const commonResponsiveStyles: StitchesCSS = {
	'@media only screen and (max-width:1400px)': {
		gridTemplateColumns: ' 1fr 1fr'
	},

	'@media only screen and (max-width:900px)': {
		gridTemplateColumns: ' 1fr'
	}
};

export const CategoriesListGrid = styled('div', {
	display: 'grid',
	gridColumnGap: '3.2rem',
	gridRowGap: '3.2rem',

	variants: {
		grid: {
			'60-40': {
				gridTemplateColumns: '2.5fr 2fr',
				...commonResponsiveStyles
			},
			'40-60': {
				gridTemplateColumns: '2fr 2.5fr',
				...commonResponsiveStyles
			}
		}
	}
});
