import React from 'react';
import Link from 'next/link';

import type { LinkProps } from 'next/link';
import type { StitchesCSS } from '../../stitches.config';

/* Styling */
import { CustomLink } from './index.styles';

type Props = React.PropsWithChildren<LinkProps & { style?: StitchesCSS }>;

// Use it for navugation for nextjs pages
function InternalLink(props: Props) {
	const { children, style, ...nextLinkProps } = props;

	return (
		<Link {...nextLinkProps} passHref>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<CustomLink css={style}>{children}</CustomLink>
		</Link>
	);
}

export default InternalLink;

InternalLink.defaultProps = {
	style: {}
};
