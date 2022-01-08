import { styled } from '../stitches.config';

export const CategoryBannerTile = styled('section', {
	minHeight: '25rem',
	bgColor: '$gray4',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	h1: {
		fontSize: '$48'
	}
});

export const CategoryProductsGridLayout = styled('ul', {
	my: '10rem',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	listStyle: 'none'
});

export const CategoryProductsGridItem = styled('li', {
	width: '33.33%',
	listStyle: 'none',
	padding: '1.2rem'
});
