import type { AppProps } from 'next/app';

/* Global Reset for styles */
import { globalStyles } from '../styles/globalReset';

/* Footer */
import Footer from '../components/Footer';
import CopyrightFooter from '../components/CopyrightFooter';
import Navbar from '../components/Navbar';

/* Providers */
import { CartProvider } from '../context/CartContext';

function MyApp({ Component: AppComponent, pageProps }: AppProps) {
	globalStyles();

	return (
		<CartProvider>
			<Navbar />
			<AppComponent {...pageProps} />
			<Footer />
			<CopyrightFooter />
		</CartProvider>
	);
}

export default MyApp;
