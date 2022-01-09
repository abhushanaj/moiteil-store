import type { AppProps } from 'next/app';

/* Global Reset for styles */
import { globalStyles } from '../styles/globalReset';

/* Footer */
import Footer from '../components/Footer';
import CopyrightFooter from '../components/CopyrightFooter';
import Navbar from '../components/Navbar';

function MyApp({ Component: AppComponent, pageProps }: AppProps) {
	return (
		<>
			{globalStyles()}
			<Navbar />
			<AppComponent {...pageProps} />
			<Footer />
			<CopyrightFooter />
		</>
	);
}

export default MyApp;
