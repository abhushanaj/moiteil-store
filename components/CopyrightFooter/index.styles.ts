import { styled } from '../../stitches.config';

import type { StitchesCSS } from '../../stitches.config';

export const contentLayoutStyles: StitchesCSS = {
	py: '1.5rem',
	fontWeight: '$medium',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	'@media only screen and (max-width:700px)': {
		flexDirection: 'column',
		textAlign: 'center'
	}
};

export const CopyrightFooterLayout = styled('div', {
	borderTop: '2px solid',
	borderColor: '$gray5'
});

export const Content = styled('div', {
	fontSize: '$12',

	'@media only screen and (max-width:700px)': {
		mb: '1.8rem'
	}
});

export const StripeBlock = styled('div', {
	fontSize: '$14',
	color: '$gray1',
	bgColor: '$primaryOrange',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '1rem',
	borderRadius: '$8',
	fontWeight: '$medium',
	flexWrap: 'wrap',

	'& p': {
		mr: '1rem'
	}
});
