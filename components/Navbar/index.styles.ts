import { slideIn, slideOut, StitchesCSS, styled } from '../../stitches.config';

/* Common reset styles for button on navbar */
const btnReset: StitchesCSS = {
	outline: 'none',
	border: 'none',
	width: '40px',
	height: '40px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '$99999',
	bgColor: '$gray1',
	mb: '1rem',

	'&:hover, &:active, &:focus': {
		bgColor: '$gray4'
	}
};

export const DesktopNavbarLayout = styled('nav', {
	position: 'sticky',
	top: 0,
	left: 0,
	right: 0,
	zIndex: '100',
	boxShadow: '$3',
	bgColor: '$gray1'
});

export const TopBarWrapper = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	py: '1rem',

	'@media only screen and (max-width:800px)': {
		pb: 'unset'
	}
});

export const cartButtonLink: StitchesCSS = {
	position: 'relative',

	...btnReset,

	'&:hover': {
		bgColor: '$gray4'
	}
};

export const ButtonWrapper = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'stretch'
});

export const CartItemsCount = styled('span', {
	position: 'absolute',
	top: '-10px',
	right: '-10px',
	bgColor: '$secondaryOrange',
	color: '$gray1',
	fontSize: '$12',
	fontWeight: '$medium',
	width: '25px',
	height: '25px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '50%'
});

export const BurgerBtn = styled('button', {
	...btnReset,

	svg: {
		width: '18px',
		height: '18px'
	},

	'@media only screen and (min-width:800px)': {
		display: 'none',
		visibility: 'hidden'
	}
});

/* Mobile Navbar */
export const MobileNavbarLayout = styled('nav', {
	position: 'fixed',
	right: '0',
	top: '0',
	bottom: '0',
	height: '100vh',
	bgColor: '$gray1',
	zIndex: '100',
	width: '30rem',
	py: '10rem',
	boxShadow: '$3',

	'@media only screen and (min-width:800px)': {
		display: 'none',
		visibility: 'hidden'
	},

	variants: {
		animationType: {
			slideIn: {
				animation: `${slideIn} 0.5s ease-in-out`
			},
			slideOut: {
				animation: `${slideOut} 0.5s ease-in-out`
			}
		}
	}
});

export const CloseBtn = styled('button', {
	...btnReset,

	position: 'fixed',

	top: '10px',
	right: '10px',

	svg: {
		width: '18px',
		height: '18px'
	}
});

/* Navigation Items Styles */
export const NavbarItemList = styled('ul', {
	listStyle: 'none',
	fontSize: '$16',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	zIndex: 'inherit',

	variants: {
		type: {
			desktop: {
				'@media only screen and (max-width:800px)': {
					display: 'none',
					visibility: 'hidden'
				}
			},

			mobile: {
				flexDirection: 'column',
				height: '100%',

				'@media only screen and (min-width:800px)': {
					display: 'none',
					visibility: 'hidden'
				}
			}
		}
	},

	defaultVariants: {
		type: 'desktop'
	}
});

export const NavbarItem = styled('li', {
	zIndex: 'inherit',

	'&::after': {
		content: '',
		display: 'block',
		height: '4px',
		bgColor: '$primaryOrange',
		width: '0%',
		transition: 'width 0.3s ease-in-out',
		mt: '1rem'
	},

	'&:hover::after': {
		width: '100%'
	},

	variants: {
		active: {
			true: {
				fontWeight: 'bold',
				'&::after': {
					width: '100%'
				}
			}
		}
	}
});
