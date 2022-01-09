import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, css, globalCss, keyframes, theme, createTheme, getCssText, config } = createStitches({
	theme: {
		/* Color pallete */
		colors: {
			/* Grays for the application */
			gray1: '#fcfcfc',
			gray2: '#f8f8f8',
			gray3: '#f3f3f3',
			gray4: '#ededed',
			gray5: '#e8e8e8',
			gray6: '#e2e2e2',
			gray7: '#dbdbdb',
			gray8: '#c7c7c7',
			gray9: '#8f8f8f',
			gray10: '#858585',
			gray11: '#6f6f6f',
			gray12: '#171717',
			textColor: '#333237',
			primaryTeal: '#ADD4D3',
			primaryOrange: '#FB8351',
			secondaryOrange: '#FFAD64'
		},

		/* Font scale */
		fonts: {
			body: 'Nunito, sans-serif',
			heading: 'Inter,sans-serif'
		},
		fontWeights: {
			light: 300,
			regular: 400,
			medium: 500,
			semiBold: 600
		},
		fontSizes: {
			10: '1rem',
			12: '1.2rem',
			14: '1.4rem',
			16: '1.6rem',
			18: '1.8rem',
			20: '2rem',
			22: '2.2rem',
			24: '2.4rem',
			26: '2.6rem',
			28: '2.8rem',
			30: '3rem',
			32: '3.2rem',
			34: '3.4rem',
			36: '3.6rem',
			42: '4.2rem',
			48: '4.8rem'
		},

		/* Radii composition */
		radii: {
			4: '4px',
			5: '5px',
			8: '8px',
			10: '10px',
			12: '12px',
			15: '15px',
			99999: '99999px'
		},

		/* Box shadows */
		shadows: {
			1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			2: '0 5px 10px rgba(0, 0, 0, 0.1)',
			3: '0 10px 20px rgba(0, 0, 0, 0.1)'
		},

		/* Z index */
		zIndices: {
			1: 1,
			2: 2
		}
	},

	/* Setting up custom utils */
	utils: {
		/* Utils for setting margins */
		mx: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				marginLeft: value,
				marginRight: value
			};
		},
		my: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				marginTop: value,
				marginBottom: value
			};
		},
		mt: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				marginTop: value
			};
		},
		mb: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				marginBottom: value
			};
		},
		ml: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				marginLeft: value
			};
		},
		mr: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				marginRight: value
			};
		},

		/* Utils for setting padding */
		px: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				paddingLeft: value,
				paddingRight: value
			};
		},
		py: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				paddingTop: value,
				paddingBottom: value
			};
		},
		pt: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				paddingTop: value
			};
		},
		pb: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				paddingBottom: value
			};
		},
		pl: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				paddingLeft: value
			};
		},
		pr: (value: Stitches.PropertyValue<'margin'>) => {
			return {
				paddingRight: value
			};
		},

		/* Utils for setting background colors */
		bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => {
			return {
				backgroundColor: value
			};
		}
	},

	/* Setting up media breakpoints if needed */
	media: {},

	/* Setting up a prefix moiteil on all classes */
	prefix: 'moiteil-'
});

/* Useful animation keyframes */
export const slideIn = keyframes({
	'0%': {
		transform: 'translateX(100%)'
	},
	'100%': {
		transform: 'translateX(0)'
	}
});

export const slideOut = keyframes({
	'0%': {
		transform: 'translateX(0)'
	},
	'100%': {
		transform: 'translateX(100%)'
	}
});

/* Exported types for Stitches */
export type StitchesCSS = Stitches.CSS<typeof config>;
export type StitchesGenericVariantsProps<T> = Stitches.VariantProps<T>;
