import { StitchesCSS, styled } from '../../stitches.config';

const commonResponsiveStyles: StitchesCSS = {
	'@media only screen and (max-width:1400px)': {
		gridTemplateColumns: ' 1fr 1fr'
	},

	'@media only screen and (max-width:900px)': {
		gridTemplateColumns: ' 1fr'
	}
};

export const CategoriesListGrid = styled('div', {
	display: 'grid',
	gridColumnGap: '3.2rem',
	gridRowGap: '3.2rem',

	variants: {
		grid: {
			'60-40': {
				gridTemplateColumns: '2.5fr 2fr',
				...commonResponsiveStyles
			},
			'40-60': {
				gridTemplateColumns: '2fr 2.5fr',
				...commonResponsiveStyles
			}
		}
	}
});
