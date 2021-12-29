import type { NextPage } from 'next';

/* Components */
import ErrorLayout from '../components/Layout/ErrorLayout';

const NotFoundPage: NextPage = () => {
	return (
		<ErrorLayout heading="Page Not Found" message="The page you are looking for doesn't exist or has been moved." />
	);
};

export default NotFoundPage;
