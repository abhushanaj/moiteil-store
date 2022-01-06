import { styled } from '../../stitches.config';

export const FeaturesListGrid = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'repeat(3,1fr)',
	gap: '4rem',

	'@media only screen and (max-width:950px)': {
		gridTemplateColumns: '1fr'
	}
});

export const FeatureListCard = styled('div', {
	width: '100%',
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	minHeight: '20rem',

	h3: {
		fontSize: '$24'
	},

	p: {
		fontSize: '$16',
		fontWeight: '$medium'
	}
});
