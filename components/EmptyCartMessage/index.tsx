import Image from 'next/image';

/* Styling */
import { EmptyCartMessageWrapper } from './index.styles';

/* Components */
import InternalLink from '../InternalLink';

/* Asset */
import cartIllustration from '../../public/cart-illustration.svg';

function EmptyCartMessage() {
	return (
		<EmptyCartMessageWrapper>
			<Image src={cartIllustration} />

			<p>There are no items in your cart yet.</p>

			<InternalLink href="/">Start Shopping</InternalLink>
		</EmptyCartMessageWrapper>
	);
}

export default EmptyCartMessage;
