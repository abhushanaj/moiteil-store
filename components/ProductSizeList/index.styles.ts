import { styled } from '../../stitches.config';

export const ProductSizeListWrapper = styled('ul', {
	listStyle: 'none',
	display: 'flex',
	alignItems: 'center',
	flexWrap: 'wrap',
	my: '1rem'
});

export const ProductSizeListOption = styled('li', {
	width: 'max-content',
	height: 'max-content',
	mr: '1rem',
	borderRadius: '$5',
	padding: '2px 5px',
	borderColor: '1px solid $gray1',
	cursor: 'pointer',

	variants: {
		selected: {
			true: {
				border: '1px solid $gray6'
			}
		}
	}
});
