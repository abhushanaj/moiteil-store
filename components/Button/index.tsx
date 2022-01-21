import { styled } from '../../stitches.config';

const Button = styled('button', {
	border: 'none',
	outline: 'none',
	fontSize: '$16',
	bgColor: 'unset',
	display: 'flex',
	justifyContent: 'center',
	alignContent: 'center',

	variants: {
		variant: {
			primary: {
				bgColor: '$primaryOrange',
				color: '$gray1',
				fontWeight: '$bold',
				borderRadius: '$10',
				border: '1px solid $primaryOrange'
			}
		},

		outlined: {
			true: {
				bgColor: 'unset',
				color: '$primaryOrange',

				'&:hover': {
					bgColor: '$primaryOrange',
					color: '$gray1'
				}
			}
		},

		disabled: {
			true: {
				cursor: 'not-allowed',
				opacity: 0.6
			}
		},

		size: {
			sm: {
				padding: '5px 10px'
			},
			md: {
				padding: '10px 20px'
			},
			lg: {
				padding: '15px 30px'
			}
		}
	},

	defaultVariants: {
		variant: 'primary',
		size: 'md'
	}
});

export default Button;
