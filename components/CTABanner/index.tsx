/* Styling */
import {
	shopNowStyles,
	SubHeading,
	Heading,
	BannerCover,
	CoverImageWrapper,
	CoverImageCircle,
	BannerContentWrapper
} from './index.styles';

/* Components */
import ContentLayout from '../Layout/ContentLayout';
import InternalLink from '../InternalLink';
import GraphCMSImage from '../GraphCMSImage';

/* Types */
import type { CtaContent } from '../../types/Banner';

type Props = {
	ctaBannerContent: CtaContent;
};

function CTABanner(props: Props) {
	const { ctaBannerContent } = props;

	return (
		<ContentLayout style={{ my: '2rem' }}>
			<BannerCover>
				<BannerContentWrapper>
					<Heading>
						<SubHeading>{ctaBannerContent.subHeading}</SubHeading>
						{ctaBannerContent.heading}
					</Heading>
					<InternalLink href={ctaBannerContent.ctaLink} style={shopNowStyles}>
						Shop Now
					</InternalLink>
				</BannerContentWrapper>

				<CoverImageWrapper>
					{/* Use sample image for now */}
					<GraphCMSImage
						src={ctaBannerContent.ctaCoverImage.url}
						width={500}
						height={500}
						priority
						placeholder="empty"
					/>
					<CoverImageCircle />
				</CoverImageWrapper>
			</BannerCover>
		</ContentLayout>
	);
}

export default CTABanner;
