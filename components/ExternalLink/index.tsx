import React from 'react';

// setup types for html a tag
type Props = React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>;

// use it for navigation to external pages
function ExternalLink(props: Props) {
	const { children, target = '_blank', ...nativeAnchorTagAttributes } = props;

	return (
		<a target={target} {...nativeAnchorTagAttributes}>
			{children}
		</a>
	);
}

export default ExternalLink;
