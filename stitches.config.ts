import { createStitches } from '@stitches/react';

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
			secondaryOrange: 'FFAD64'
		},

		/* Font scale */
		fonts: {
			body: 'Nunito, sans-serif',
			heading: 'Inter,sans-serif'
		},
		fontWeights: {
			light: 300,
			regular: 400,
			medium: 500
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
			42: '4.2rem'
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
		}
	},

	/* Setting up custom utils */
	utils: {
		/* Utils for setting margins */
		marginX: (value: string) => ({
			marginLeft: value,
			marginRight: value
		}),
		marginY: (value: string) => ({
			marginTop: value,
			marginBottom: value
		}),
		mt: (value: string) => ({
			marginTop: value
		}),
		mb: (value: string) => ({
			marginBottom: value
		}),
		ml: (value: string) => ({
			marginLeft: value
		}),
		mr: (value: string) => ({
			marginRight: value
		}),

		/* Utils for setting padding */
		paddingX: (value: string) => ({
			paddingLeft: value,
			paddingRight: value
		}),
		paddingY: (value: string) => ({
			paddingTop: value,
			paddingBottom: value
		}),
		pt: (value: string) => ({
			paddingTop: value
		}),
		pb: (value: string) => ({
			paddingBottom: value
		}),
		pl: (value: string) => ({
			paddingLeft: value
		}),
		pr: (value: string) => ({
			paddingRight: value
		}),

		/* Utils for setting background colors */
		bgColor: (value: string) => ({
			backgroundColor: value
		})
	},

	/* Setting up media breakpoints if needed */
	media: {},

	/* Setting up a prefix moiteil on all classes */
	prefix: 'moiteil-'
});
