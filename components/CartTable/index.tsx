/* Styling */

import {
	Table,
	TableRow,
	TableItem,
	CartItem,
	CartItemImage,
	CartItemInfo,
	CartItemText,
	QtyBtn,
	CartSummary,
	QtyBtnWrapper
} from './index.styles';

/* Components */
import GraphCMSImage from '../GraphCMSImage';
import EmptyCartMessage from '../EmptyCartMessage';

const cartItems: any[] = [
	{
		id: 'sdsdsdd',
		name: 'Merchify Unisex Dark T-Shirt',
		price: '20.00',
		size: 'M',
		color: '#fff',
		image: 'https://media.graphcms.com/SFnYY4X6T2amyqAEUxiA'
	},
	{
		id: 'sdsdsdd',
		name: 'Merchify Unisex Tank Top',
		price: '20.00',
		size: 'M',
		color: '#fff',
		image: 'https://media.graphcms.com/SFnYY4X6T2amyqAEUxiA'
	},
	{
		id: 'sdsdsdd',
		name: 'Moiteil Eco Friendly Dark Tote Bag',
		price: '20.00',
		size: 'M',
		color: '#fff',
		image: 'https://media.graphcms.com/SFnYY4X6T2amyqAEUxiA'
	},
	{
		id: 'sdsdsdd',
		name: 'Moiteil Inspirational Wall Poster',
		price: '20.00',
		size: 'M',
		color: '#fff',
		image: 'https://media.graphcms.com/SFnYY4X6T2amyqAEUxiA'
	}
];

function CartTable() {
	if (cartItems && cartItems.length === 0) {
		return <EmptyCartMessage />;
	}

	return (
		<>
			{/* Cart Table */}
			<Table>
				<TableRow>
					<TableItem type="header">
						<p>#</p>
					</TableItem>
					<TableItem type="header">
						<p>Product Details</p>
					</TableItem>
					<TableItem type="header">
						<p>Quantity</p>
					</TableItem>
				</TableRow>

				{/* Rows for Cart Items */}

				{cartItems.map((cartItem) => {
					return (
						<TableRow key={cartItem.id}>
							<TableItem type="data">1.</TableItem>

							<TableItem>
								<CartItem>
									<CartItemImage>
										<GraphCMSImage src={cartItem.image} width={100} height={100} />
									</CartItemImage>

									<CartItemInfo>
										<CartItemText type="name">{cartItem.name} </CartItemText>
										<CartItemText>{`$${cartItem.price} (x3)`}</CartItemText>
										<CartItemText>{cartItem.size}</CartItemText>
										<CartItemText type="bold">
											Sub Total: <span>$ 1,000</span>
										</CartItemText>
									</CartItemInfo>
								</CartItem>
							</TableItem>

							<TableItem>
								<QtyBtnWrapper>
									<QtyBtn type="button">+</QtyBtn>

									<CartItemText type="quantity">100</CartItemText>

									<QtyBtn type="button">-</QtyBtn>
								</QtyBtnWrapper>
							</TableItem>
						</TableRow>
					);
				})}
			</Table>

			{/* Cart Summary */}
			<CartSummary>
				<p>
					Checkout Amount:
					<span>$1,0000</span>
				</p>
				<button type="button">Checkout</button>
			</CartSummary>
		</>
	);
}

export default CartTable;
