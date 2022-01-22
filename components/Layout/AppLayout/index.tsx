import React from 'react';
import Head from 'next/head';

/* Utils */
import { generatePageUrlFromSlug } from '../../../utils/page';

/* TYpes */
type SEOProps = {
	title: string;
	description?: string;
	pageSlug: string;
	socialImage?: string;
};

type Props = React.PropsWithChildren<SEOProps>;

function AppLayout(props: Props) {
	const { children, title, description, pageSlug, socialImage } = props;

	const pageUrl = generatePageUrlFromSlug(pageSlug);

	return (
		<>
			<Head>
				{/* Title tags */}
				<title>{`Moiteil Store | ${title}`}</title>
				<meta name="title" content={title} />
				<meta property="twitter:title" content={title} />
				<meta property="og:title" content={title} />

				{/* Description tags */}
				{description && (
					<>
						<meta name="description" content={description} />
						<meta property="og:description" content={description} />
						<meta property="twitter:description" content={description} />
					</>
				)}

				{/* Social Images Tag */}
				{socialImage && (
					<>
						<meta property="og:image" content={socialImage} />
						<meta property="twitter:image" content={socialImage} />
					</>
				)}

				{/* Open Graph Meta tags */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={pageUrl} />

				{/* Other Twitter specific tags */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={pageUrl} />
			</Head>

			{/* Rest of page content wrapped in main */}
			<main style={{ minHeight: '100vh' }}>{children}</main>
		</>
	);
}

export default AppLayout;

AppLayout.defaultProps = {
	socialImage: '',
	description: ''
};
