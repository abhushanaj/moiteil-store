import Image from 'next/image';

/* Styling */
import { Main, ContentWrapper } from './index.styles';

/* Assets */
import logoWithoutText from '../../../public/logo-without-text.png';

type Props = {
	heading: string;
	message: string;
	// ctaActionLink?: string;
};

const ErrorLayout = (props: Props) => {
	const { heading, message } = props;
	return (
		<Main>
			<Image src={logoWithoutText} width={86} height={74} />

			<ContentWrapper>
				<h1>{heading}</h1>
				<p>{message}</p>
			</ContentWrapper>
		</Main>
	);
};

export default ErrorLayout;
