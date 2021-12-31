import { styled } from '../../stitches.config';

export const FooterLayout = styled('footer', {
	borderTop: '5px solid',
	borderColor: '$primaryOrange'
});

export const SocialMediaGrid = styled('div', {
	display: 'grid',
	gridTemplateColumns: '40px 40px 40px',
	gridColumnGap: '40px',
	mt: '1rem',

	'& a': {
		border: '1px solid $gray8',
		display: 'grid',
		placeItems: 'center',
		borderRadius: '$5',
		padding: '5px',
		width: 'max-content',
		boxShadow: '$1'
	}
});

export const FooterGrid = styled('div', {
	display: 'grid',
	gridTemplateColumns: '350px repeat(3,1fr)',
	gridColumnGap: '16px',
	gridRowGap: '30px'
});

export const FooterGridItem = styled('div', {
	maxWidth: '30rem',

	'& ul': {
		listStyle: 'none'
	}
});

export const FooterGridItemTitle = styled('h5', {
	fontWeight: '$semiBold',
	fontSize: '$24',
	mb: '1.6rem'
});

export const FooterGridItemList = styled('ul', {
	listStyle: 'none'
});

export const FooterLinkItem = styled('li', {
	mb: '12px',
	fontWeight: '$medium',
	transition: 'color 0.3s ease-in-out',
	display: 'flex',
	alignItems: 'flex-start',

	'& svg': {
		mr: '10px'
	},

	'& a': {
		lineHeight: 1.2
	},

	'&:hover': {
		textDecoration: 'underline'
	}
});
