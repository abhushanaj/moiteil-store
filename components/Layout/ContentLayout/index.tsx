import React from 'react';

/* Styling */
import { Wrapper } from './index.styles';

type Props = {
	children: React.ReactNode;
	styles: React.CSSProperties;
};

const ContentLayout = (props: Props) => {
	const { children, styles } = props;
	return <Wrapper style={styles}>{children}</Wrapper>;
};

export default ContentLayout;
