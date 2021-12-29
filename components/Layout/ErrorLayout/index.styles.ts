import { styled } from '../../../stitches.config';

export const Main = styled('main', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	height: '100vh'
});

export const ContentWrapper = styled('div', {
	width: '60rem',
	padding: '2rem',
	textAlign: 'center',
	mt: '2rem',
	boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
	borderRadius: '$10',
	bgColor: '$gray1',

	'@media only screen and (max-width:600px)': {
		maxWidth: '90%'
	},

	'& h1': {
		fontSize: '$42',
		fontWeight: '$semiBold',
		lineHeight: '1.2',

		'@media only screen and (max-width: 600px)': {
			fontSize: '$32'
		}
	},

	'& p': {
		fontSize: '$18',
		mx: 'auto',
		mt: '1rem',
		maxWidth: '34rem',

		'@media only screen and (max-width: 600px)': {
			maxWidth: '100%'
		}
	}
});
