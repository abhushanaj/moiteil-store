import { styled } from '../../stitches.config';

export const CarauselWrapper = styled('div', {
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	height: '100%',
	width: '100%',

	'@media only screen and (max-width:1200px)': {
		width: '100%',
		alignItems: 'center'
	},

	'@media only screen and (max-width:750px)': {
		flexDirection: 'column'
	}
});

export const ImageChoiceList = styled('ul', {
	overflow: 'auto',
	height: '100%',
	maxHeight: '60rem',
	display: 'flex',
	flexDirection: 'column',
	pr: '10px',
	listStyle: 'none',

	'@media only screen and (max-width:750px)': {
		display: 'none'
	}
});

export const ImageChoiceListItem = styled('li', {
	my: '10px',
	cursor: 'pointer',
	bgColor: '$gray5'
});

export const MainImage = styled('div', {
	ml: '3rem',
	cursor: 'pointer'
});
