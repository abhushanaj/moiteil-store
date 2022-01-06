import { styled } from '../../../stitches.config';

export const CatgeoryCard = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	width: '100%',
	bgColor: '$gray4',
	borderRadius: '$10',
	boxShadow: '$2',
	height: '100%',
	minHeight: '35rem',

	'@media only screen and (max-width:1200px)': {
		flexDirection: 'column',
		alignItems: 'center'
	}
});

export const CategoryCardTitle = styled('h2', {
	// generic styles
	fontSize: '$42',
	pl: '2rem',
	py: '2rem',
	maxWidth: '35rem',
	zIndex: '$2',

	'@media only screen and (max-width:500px)': {
		fontSize: '$30'
	},

	span: {
		bgColor: '$primaryOrange',
		width: '8px',
		height: '8px',
		display: 'inline-block',
		borderRadius: '$1'
	},

	variants: {
		small: {
			true: {
				alignSelf: 'flex-end',

				'@media only screen and (max-width:1200px)': {
					alignSelf: 'center'
				}
			}
		}
	}
});
