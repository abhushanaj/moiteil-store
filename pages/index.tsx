import type { NextPage } from 'next';

/* Components */
import CTABanner from '../components/CTABanner';

const Home: NextPage = () => {
	return (
		<div style={{ minHeight: '100vh' }}>
			<CTABanner />
		</div>
	);
};

export default Home;
