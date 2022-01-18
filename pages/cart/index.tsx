import type { NextPage } from 'next';

/* Styling */
import {} from '../../styles/cartPage.styles';

/* Components */
import AppLayout from '../../components/Layout/AppLayout';
import ContentLayout from '../../components/Layout/ContentLayout';
import Breadcrumb from '../../components/Breadcrumb';
import BannerTile from '../../components/BannerTile';
import CartTable from '../../components/CartTable';

const CartPage: NextPage = () => {
	return (
		<AppLayout>
			<BannerTile>
				<h1>Your Cart</h1>
			</BannerTile>

			<ContentLayout>
				<Breadcrumb
					style={{ transform: 'translateY(-20px)' }}
					currentPath={[
						{ href: '/', label: 'Store', isActive: false, isDisabled: true },
						{
							href: `/cart`,
							label: 'Cart',
							isActive: true,
							isDisabled: false
						}
					]}
				/>
			</ContentLayout>

			<ContentLayout>
				<CartTable />
			</ContentLayout>
		</AppLayout>
	);
};

export default CartPage;
