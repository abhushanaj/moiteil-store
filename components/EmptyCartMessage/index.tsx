import Image from 'next/image';
import { useRouter } from 'next/router';

/* Styling */
import { EmptyCartMessageWrapper } from './index.styles';

/* Components */
import Button from '../Button';

/* Asset */
import cartIllustration from '../../public/cart-illustration.svg';

function EmptyCartMessage() {
	const router = useRouter();

	return (
		<EmptyCartMessageWrapper>
			<Image src={cartIllustration} />

			<p>There are no items in your cart yet.</p>

			<Button css={{ mx: 'auto' }} onClick={() => router.push('/')} title="Visit home page">
				Start Shopping
			</Button>
		</EmptyCartMessageWrapper>
	);
}

export default EmptyCartMessage;
