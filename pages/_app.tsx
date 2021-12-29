import type { AppProps } from 'next/app';

/* Global Reset for styles */
import { globalStyles } from '../styles/globalReset';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles()}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
