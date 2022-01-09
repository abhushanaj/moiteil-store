import { styled } from '../../stitches.config';

export const NavbarLayout = styled('nav', {
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

export const BurgerBtn = styled('button', {
	outline: 'none',
	border: 0,
	cursor: 'pointer',
	width: '40px',
	height: '40px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	bgColor: '$gray1',
	borderRadius: '$99999',
	mb: '1rem',

	svg: {
		width: '18px',
		height: '18px'
	},

	'@media only screen and (min-width:800px)': {
		display: 'none'
	},

	'&:hover, &:active': {
		bgColor: '$gray4'
	}
});

export const NavbarItemList = styled('ul', {
	listStyle: 'none',
	fontSize: '$16',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	'@media only screen and (max-width:800px)': {
		display: 'none'
	}
});

export const NavbarItem = styled('li', {
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

/* Mobile Navbar */
