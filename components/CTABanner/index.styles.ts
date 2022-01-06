import { styled } from '../../stitches.config';
import type { StitchesCSS } from '../../stitches.config';

export const shopNowStyles: StitchesCSS = {
	mt: '2rem',
	fontWeight: '$semiBold',
	color: '$textColor',
	display: 'inline-block',
	fontSize: '$16',

	'&::after': {
		content: '',
		display: 'block',
		height: '3px',
		borderRadius: '$2',
		bgColor: 'rgba(255,255,255,0.3)',
		width: '100%',
		transition: 'background-color 0.3s linear'
	},

	'&:hover': {
		'&::after': {
			bgColor: 'currentColor'
		}
	}
};

export const BannerCover = styled('div', {
	bgColor: '$primaryOrange',
	minHeight: '60vh',
	borderRadius: '$10',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	alignItems: 'center',

	'@media only screen and (max-width:1000px)': {
		gridTemplateColumns: '1fr'
	}
});

export const BannerContentWrapper = styled('div', {
	pl: '12rem',

	'@media only screen and (max-width:1000px)': {
		pl: 0,
		textAlign: 'center',
		mb: '3rem',
		py: '4rem'
	}
});

export const Heading = styled('h1', {
	fontSize: '$48',
	color: '$gray1',
	display: 'flex',
	flexDirection: 'column',
	fontWeight: '$semiBold',
	lineHeight: '1.1',

	'@media only screen and (max-width:1000px)': {
		fontSize: '$42'
	}
});

export const SubHeading = styled('span', {
	fontSize: '$24',
	color: '$textColor',
	mb: '1rem'
});

export const CoverImageWrapper = styled('div', {
	position: 'relative',
	overflow: 'hidden',
	height: '100%',
	width: '100%',
	zIndex: '$2',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	'@media only screen and (max-width:500px)': {
		maxWidth: '100%',
		maxHeight: '100%'
	}
});

export const CoverImageCircle = styled('div', {
	maxWidth: '55rem',
	maxHeight: '55rem',
	position: 'absolute',
	bottom: '-15rem',
	zindex: '$1',
	bgColor: '$secondaryOrange',
	borderRadius: '50%',
	width: '100%',
	height: '100%',
	zIndex: -1,

	'@media only screen and (max-width:500px)': {
		maxWidth: '100%',
		maxHeight: '100%',
		bottom: '-10rem'
	}
});
