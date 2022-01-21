import { styled } from '../../stitches.config';

export const NewsletterForm = styled('form', {
	borderRadius: '$10',
	bgColor: '$textColor',
	color: '$gray1',
	minHeight: '30rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	py: '3rem'
});

export const NewsletterContentWrapper = styled('div', {
	width: '50%',
	mx: 'auto',
	my: '2rem',
	textAlign: 'center',

	'@media only screen and (max-width:1250px)': {
		width: '90%'
	},

	h3: {
		fontSize: '4rem',

		'@media only screen and (max-width:800px)': {
			fontSize: '$30'
		},

		'@media only screen and (max-width:500px)': {
			fontSize: '$26'
		}
	},

	input: {
		width: '100%',
		bgColor: '$gray4',
		outline: 0,
		border: 0,
		fontSize: '$16',
		padding: '1.5rem 1rem',
		borderRadius: '$10',
		my: '3rem'
	}
});

export const SuccessMessage = styled('div', {
	textAlign: 'center',
	padding: '2rem',
	bgColor: '$gray4',
	color: '$textColor',
	mt: '2.5rem'
});
