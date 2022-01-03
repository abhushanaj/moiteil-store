import Image from 'next/image';

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

function CTABanner() {
	return (
		<ContentLayout style={{ my: '2rem' }}>
			<BannerCover>
				<BannerContentWrapper>
					<Heading>
						<SubHeading>Back In Stock</SubHeading>
						Embroidered Moiteil Beanie
					</Heading>
					<InternalLink href="/hats" style={shopNowStyles}>
						Shop Now
					</InternalLink>
				</BannerContentWrapper>

				<CoverImageWrapper>
					{/* Use sample image for now */}
					<Image
						src="https://media.graphcms.com/resize=height:500,width:500/YdbrbTqTguN16RVac3zQ"
						width={500}
						height={500}
					/>
					<CoverImageCircle />
				</CoverImageWrapper>
			</BannerCover>
		</ContentLayout>
	);
}

export default CTABanner;
