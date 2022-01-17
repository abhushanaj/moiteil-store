import { styled } from '../../stitches.config';

export const Tile = styled('section', {
	minHeight: '25rem',
	bgColor: '$gray4',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	h1: {
		fontSize: '$48',

		'@media only screen and (max-width: 750px)': {
			fontSize: '$36'
		}
	}
});
