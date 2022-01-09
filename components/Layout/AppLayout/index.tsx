import React from 'react';

type Props = React.PropsWithChildren<{}>;

function AppLayout(props: Props) {
	const { children } = props;

	return <main style={{ minHeight: '100vh' }}>{children}</main>;
}

export default AppLayout;
