import { styled } from '../../stitches.config';

export const ProductSizeListWrapper = styled('ul', {
	listStyle: 'none',
	display: 'flex',
	alignItems: 'center',
	flexWrap: 'wrap',
	my: '2rem',
	fontSize: '1.4rem',
	fontWeight: '$medium'
});

export const ProductSizeListOption = styled('li', {
	minWidth: '3.4rem',
	width: 'max-content',
	height: 'max-content',
	mr: '1rem',
	borderRadius: '$5',
	padding: '2px 5px',
	boxShadow: '$1',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	cursor: 'pointer',

	'&:hover': {
		bgColor: '$gray4'
	},

	variants: {
		selected: {
			true: {
				bgColor: '$gray5'
			}
		}
	}
});
