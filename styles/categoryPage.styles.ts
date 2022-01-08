import { StitchesCSS, styled } from '../stitches.config';

export const CategoryBannerTile = styled('section', {
	minHeight: '25rem',
	bgColor: '$gray4',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	h1: {
		fontSize: '$48',

		'@media only screen and (max-width: 750px)': {
			fontSize: '$36'
		}
	}
});

export const pageLayoutStyles: StitchesCSS = {
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	my: '10rem',

	'@media only screen and (max-width: 1000px)': {
		flexDirection: 'column',
		my: '5rem'
	}
};

export const AsideWrapper = styled('div', {
	h1: {
		fontSize: '$30',
		pl: '2.4rem',
		pb: '2.4rem',

		'@media only screen and (max-width: 1000px)': {
			pl: 'unset'
		}
	},

	'@media only screen and (max-width: 1000px)': {
		order: 2,
		width: '100%',
		my: '4rem'
	}
});

export const CategoryNavigationList = styled('ul', {
	listStyle: 'none',
	fontSize: '$16',
	padding: '2.4rem',
	borderRadius: '$10',
	boxShadow: '$3',
	minWidth: '30rem',

	'@media only screen and (max-width: 1000px)': {
		minWidth: 'unset'
	}
});

export const CategoryNavigationListItem = styled('li', {
	fontWeight: '$medium',
	my: '1rem',
	display: 'flex',
	alignItems: 'center',
	overflow: 'hidden',

	variants: {
		active: {
			true: {
				fontWeight: 'bold',
				color: '$secondaryOrange',

				'&::before': {
					content: '',
					display: 'block',
					height: '20px',
					width: '4px',
					bgColor: '$primaryOrange',
					mr: '5px'
				}
			}
		}
	}
});

export const CategoryProductsGridLayout = styled('ul', {
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	listStyle: 'none',
	ml: '3rem',
	width: '100%',

	'@media only screen and (max-width: 1000px)': {
		ml: 'unset'
	}
});

export const CategoryProductsGridItem = styled('li', {
	width: '33.33%',
	listStyle: 'none',
	padding: '1.2rem',

	'@media only screen and (max-width: 800px)': {
		width: '50%'
	},

	'@media only screen and (max-width: 550px)': {
		width: '100%'
	}
});
