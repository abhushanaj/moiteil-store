import Image from 'next/image';
import { useRouter } from 'next/router';

/* Styling */
import { Main, ContentWrapper } from './index.styles';

/* Components */
import Button from '../../Button';

/* Assets */
import logoWithoutText from '../../../public/logo-without-text.png';

type Props = {
	heading: string;
	message: string;
};

const ErrorLayout = (props: Props) => {
	const { heading, message } = props;

	const router = useRouter();

	return (
		<Main>
			<Image src={logoWithoutText} width={86} height={74} />

			<ContentWrapper>
				<h1>{heading}</h1>
				<p>{message}</p>
				<Button css={{ mx: 'auto', my: '2rem' }} onClick={() => router.push('/')} title="Visit home page">
					Go Home
				</Button>
			</ContentWrapper>
		</Main>
	);
};

export default ErrorLayout;
