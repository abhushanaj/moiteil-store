import type { AppProps } from 'next/app';

/* Global Reset for styles */
import { globalStyles } from '../styles/globalReset';

function MyApp({ Component: AppComponent, pageProps }: AppProps) {
	return (
		<>
			{globalStyles()}
			<AppComponent {...pageProps} />
		</>
	);
}

export default MyApp;
