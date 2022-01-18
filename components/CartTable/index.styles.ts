import { styled } from '../../stitches.config';

export const Table = styled('div', {
	border: '1px solid',
	borderColor: '$gray3',
	maxHeight: '80vh',
	overflowY: 'auto',
	mb: '10rem'
});

export const TableRow = styled('div', {
	display: 'flex',
	align: 'center',
	borderBottom: '1px solid $gray7',
	userSelect: 'none'
});

export const TableItem = styled('div', {
	my: '1.5rem',
	textAlign: 'left',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	minWidth: 'max-content',

	'&:nth-child(2)': {
		flex: '1'
	},

	// select all nth child expect 2
	'&:not(:nth-child(2))': {
		px: '1.5rem',
		minWidth: '20rem'
	},

	variants: {
		type: {
			header: {
				fontWeight: '$medium',
				textTransform: 'uppercase',
				fontSize: '$22'
			},

			data: {
				fontWeight: '$regular'
			}
		}
	},

	defaultVariants: {
		type: 'data'
	}
});

export const CartItem = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});

export const CartItemImage = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});

export const CartItemInfo = styled('div', {
	ml: '1.5rem'
});

export const CartItemText = styled('p', {
	variants: {
		type: {
			bold: {
				fontWeight: '$medium'
			},
			name: {
				fontSize: '$20',
				fontWeight: '$medium'
			},
			quantity: {
				px: '1rem'
			}
		}
	}
});

export const QtyBtn = styled('button', {
	width: 'max-content',
	height: 'max-content',
	border: 'none',
	padding: '1rem',
	bgColor: 'unset',
	outline: 'none',

	'&:hover, &:active, &:focus': {
		bgColor: '$gray4'
	}
});

export const CartSummary = styled('div', {
	my: '4rem',
	ml: 'auto',
	width: 'max-content',

	p: {
		fontSize: '$24',
		my: '2rem',

		span: {
			fontWeight: '$medium',
			color: '$primaryOrange',
			ml: '1rem'
		}
	}
});
