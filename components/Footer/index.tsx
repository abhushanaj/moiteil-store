/* Styles */
import { FooterLayout } from './index.styles';

/* Components */
import ContentLayout from '../Layout/ContentLayout';

const Footer = () => {
	return (
		<FooterLayout style={{ marginTop: '20px' }}>
			<ContentLayout styles={{ paddingTop: '3rem' }}>
				<div>
					<p>Easily buy eco-freindly and best quality print-on-demand products in minutes with Moiteil.</p>
				</div>
			</ContentLayout>
		</FooterLayout>
	);
};

export default Footer;
