import React from 'react';
import type { StitchesCSS } from '../../../stitches.config';

/* Styling */
import { Wrapper } from './index.styles';

type Props = React.PropsWithChildren<{ style?: StitchesCSS; as?: 'section' | 'div' }>;

const ContentLayout = (props: Props) => {
	const { children, style, as } = props;
	return (
		<Wrapper css={style} as={as}>
			{children}
		</Wrapper>
	);
};

export default ContentLayout;

ContentLayout.defaultProps = {
	style: {},
	as: 'div'
};
