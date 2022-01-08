import { graphCMSClient } from '..';

/* GQL Queries */
import { GET_CTA_BANNER_CONTENT } from '../../../graphQL/queries/ctaBanner';

/* Types */
import { CtaContent } from '../../../types/banner';

/* Helper functiopn to get all contents for cta banner */
export async function getBannerDetails(): Promise<{ ctaBanners: CtaContent[] }> {
	return graphCMSClient.request(GET_CTA_BANNER_CONTENT);
}
