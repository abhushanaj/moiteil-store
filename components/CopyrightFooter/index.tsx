import Image from 'next/image';

/* Styles */
import { contentLayoutStyles, CopyrightFooterLayout, Content, StripeBlock } from './index.styles';

/* Components */
import ExternalLink from '../ExternalLink';
import ContentLayout from '../Layout/ContentLayout';

/* Assets */
import stripeLogo from '../../public/stripe-logo.svg';

function CopyrightFooter() {
	return (
		<CopyrightFooterLayout>
			<ContentLayout style={contentLayoutStyles}>
				<Content>
					<p>&copy; Moiteil Store. All rights reserved.</p>
					<p>
						Demo created by{' '}
						<ExternalLink href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}>
							<strong>Abhushan A. Joshi</strong>{' '}
						</ExternalLink>{' '}
						and proudly powered by{' '}
						<ExternalLink href={process.env.NEXT_PUBLIC_NEXTJS_LINK}>
							<strong>Next.js</strong>.
						</ExternalLink>
					</p>
					<p>
						<strong>
							{' '}
							The application was solely crafted for educational purpose and should not be directly used in production.
						</strong>
					</p>
				</Content>

				<ExternalLink href={process.env.NEXT_PUBLIC_STRIPE_LINK}>
					<StripeBlock>
						<p>Guaranteed secure payment with</p>
						<Image src={stripeLogo} />
					</StripeBlock>
				</ExternalLink>
			</ContentLayout>
		</CopyrightFooterLayout>
	);
}

export default CopyrightFooter;
