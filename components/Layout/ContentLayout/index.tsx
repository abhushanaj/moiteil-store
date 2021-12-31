import React from 'react';
import type { CSS } from '@stitches/react';

/* Styling */
import { Wrapper } from './index.styles';

type StitchesCssProps = CSS;

type Props = React.PropsWithChildren<{ style?: StitchesCssProps }>;

const ContentLayout = (props: Props) => {
	const { children, style } = props;
	return <Wrapper css={style}>{children}</Wrapper>;
};

export default ContentLayout;

ContentLayout.defaultProps = {
	style: {}
};
