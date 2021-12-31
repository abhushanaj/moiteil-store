import { styled } from '../../../stitches.config';

export const Wrapper = styled('div', {
	mx: 'auto',
	my: '0rem',
	width: '90%',

	'@media only screen and (min-width:1440px)': {
		maxWidth: '140rem'
	}
});
