import type { NextPage } from 'next';

/* Components */
import ErrorLayout from '../components/Layout/ErrorLayout';

const NotFoundPage: NextPage = () => {
	return (
		<ErrorLayout
			heading="Oops! Something went wrong"
			message="Things seem to be a little unstable here. I suggest you come back later!"
		/>
	);
};

export default NotFoundPage;
