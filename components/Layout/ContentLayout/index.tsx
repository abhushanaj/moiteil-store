import React from 'react';
import type { StitchesCSS } from '../../../stitches.config';

/* Styling */
import { Wrapper } from './index.styles';

type Props = React.PropsWithChildren<{ style?: StitchesCSS }>;

const ContentLayout = (props: Props) => {
	const { children, style } = props;
	return <Wrapper css={style}>{children}</Wrapper>;
};

export default ContentLayout;

ContentLayout.defaultProps = {
	style: {}
};
