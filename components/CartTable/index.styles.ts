import { styled } from '../../stitches.config';

export const Table = styled('div', {
	border: '1px solid',
	borderColor: '$gray3',
	mb: '10rem'
});

export const TableRow = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderBottom: '1px dashed $gray7',
	userSelect: 'none'
});

export const TableItem = styled('div', {
	my: '1.5rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	pr: '2rem',

	// SL. No Column
	'&:first-child': {
		minWidth: '10rem',

		'@media only screen and (max-width:750px)': {
			minWidth: '3rem'
		}
	},

	// for product details column
	'&:nth-child(2)': {
		flex: 1
	},

	// for quantity column
	'&:last-child': {
		minWidth: '15rem',
		pr: 'unset',

		'@media only screen and (max-width:750px)': {
			minWidth: '6rem'
		}
	},

	variants: {
		type: {
			header: {
				fontWeight: '$medium',
				fontSize: '$24',

				'@media only screen and (max-width:1000px)': {
					fontSize: '$18'
				},

				'@media only screen and (max-width:750px)': {
					fontSize: '$16'
				}
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
	alignItems: 'center',

	'@media only screen and (max-width:1000px)': {
		flexDirection: 'column',
		alignItems: 'flex-start'
	}
});

export const CartItemImage = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});

export const CartItemInfo = styled('div', {
	ml: '1.5rem',

	'@media only screen and (max-width:1000px)': {
		ml: 'unset'
	}
});

export const CartItemColor = styled('span', {
	width: '1.5rem',
	height: '1.5rem',
	borderRadius: '50%',
	display: 'inline-block'
});

export const CartItemText = styled('p', {
	fontSize: '$16',

	'@media only screen and (max-width:750px)': {
		fontSize: '$14'
	},

	variants: {
		type: {
			bold: {
				fontWeight: '$medium'
			},

			name: {
				fontSize: '$20',
				fontWeight: '$medium',

				'@media only screen and (max-width:750px)': {
					fontSize: '$16',
					width: '100%'
				}
			},

			quantity: {
				margin: '1rem'
			}
		}
	}
});

export const QtyBtnWrapper = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	'@media only screen and (max-width:750px)': {
		flexDirection: 'column'
	}
});

export const QtyBtn = styled('button', {
	width: 'max-content',
	height: 'max-content',
	border: '1px solid $gray4',
	padding: '4px 1rem',
	outline: 'none',
	fontSize: '$18',
	bgColor: 'unset',

	'&:hover, &:active, &:focus': {
		bgColor: '$gray4'
	}
});

export const CartSummary = styled('div', {
	my: '4rem',

	p: {
		fontSize: '$24',
		my: '2rem',

		span: {
			fontWeight: '$medium',
			color: '$primaryOrange',
			ml: '1rem'
		},

		'@media only screen and (max-width:750px)': {
			fontSize: '$20'
		}
	}
});
