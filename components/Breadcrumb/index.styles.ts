import { styled } from '../../stitches.config';

export const BreadcrumbRoot = styled('ul', {
	listStyle: 'none',
	padding: '1rem 2rem',
	borderRadius: '$99999',
	bgColor: '$gray1',
	width: 'max-content',
	display: 'flex'
});

export const BreadcrumbItem = styled('li', {
	mr: '5px',
	fontWeight: '$medium',
	fontSize: '$14',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: 'max-content',

	variants: {
		isActive: {
			true: {
				fontWeight: 'bold'
			}
		},
		isDisabled: {
			true: {
				color: '$gray8'
			}
		}
	}
});
