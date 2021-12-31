import React from 'react';
import Link from 'next/link';

import type { LinkProps } from 'next/link';

type Props = React.PropsWithChildren<LinkProps>;

// Use it for navugation for nextjs pages
function InternalLink(props: Props) {
	const { children, ...nextLinkProps } = props;

	return (
		<Link {...nextLinkProps}>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a>{children}</a>
		</Link>
	);
}

export default InternalLink;
