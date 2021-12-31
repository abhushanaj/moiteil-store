import type { AppProps } from 'next/app';

/* Global Reset for styles */
import { globalStyles } from '../styles/globalReset';

/* Footer */
import Footer from '../components/Footer';

function MyApp({ Component: AppComponent, pageProps }: AppProps) {
	return (
		<>
			{globalStyles()}
			<AppComponent {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
