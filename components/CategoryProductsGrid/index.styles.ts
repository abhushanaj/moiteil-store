import { styled } from '../../stitches.config';

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
