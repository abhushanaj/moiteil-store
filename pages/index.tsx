import type { NextPage, GetStaticProps } from 'next';

/* Lib */
import { graphCMSClient } from '../lib/GraphCMSClient';

/* GraphQL */
import { GET_CTA_BANNER_CONTENT } from '../graphQL/queries/ctaBanner';

/* Components */
import CTABanner from '../components/CTABanner';
import CategoriesList from '../components/CategoriesList';

/* Types */
import type { CtaContent } from '../types/Banner';

type Props = {
	ctaBannerContent: CtaContent;
};

const Home: NextPage<Props> = (props) => {
	const { ctaBannerContent } = props;

	return (
		<div style={{ minHeight: '100vh' }}>
			<CTABanner ctaBannerContent={ctaBannerContent} />
			<CategoriesList />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	type RequestProps = {
		ctaBanners: CtaContent[];
	};

	try {
		// get the contents to cta banner
		const { ctaBanners } = await graphCMSClient.request<RequestProps>(GET_CTA_BANNER_CONTENT);

		if (!ctaBanners.length) {
			return {
				props: {
					ctaBannerContent: null
				}
			};
		}

		return {
			props: {
				ctaBannerContent: ctaBanners[0]
			}
		};

		// on error pass null to all props
	} catch (err) {
		console.error('Error getting CTA Banner content', err);
		return {
			props: {
				ctaBannerContent: null
			}
		};
	}
};

export default Home;
