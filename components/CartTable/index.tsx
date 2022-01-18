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
	CartSummary
} from './index.styles';

/* Components */
import GraphCMSImage from '../GraphCMSImage';
import EmptyCartMessage from '../EmptyCartMessage';

const cartItems: any[] = [
	// {
	// 	id: 'sdsdsdd',
	// 	name: 'Merchify T-Shirt',
	// 	price: '20.00',
	// 	size: 'M',
	// 	color: '#fff',
	// 	image: 'https://media.graphcms.com/SFnYY4X6T2amyqAEUxiA'
	// },
	// {
	// 	id: 'sdsdsdd',
	// 	name: 'Merchify T-Shirt',
	// 	price: '20.00',
	// 	size: 'M',
	// 	color: '#fff',
	// 	image: 'https://media.graphcms.com/SFnYY4X6T2amyqAEUxiA'
	// }
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
					<TableItem type="header">SL.No</TableItem>
					<TableItem type="header">Product Details</TableItem>
					<TableItem type="header">Ouantity</TableItem>
					<TableItem type="header">Sub Total</TableItem>
				</TableRow>

				{/* Rows for Cart Items */}

				{cartItems.map((cartItem) => {
					return (
						<TableRow key={cartItem.id}>
							<TableItem type="data">1.</TableItem>

							<TableItem type="data">
								<CartItem>
									<CartItemImage>
										<GraphCMSImage src={cartItem.image} width={100} height={100} />
									</CartItemImage>

									<CartItemInfo>
										<CartItemText type="name">{cartItem.name}</CartItemText>
										<CartItemText>$ {cartItem.price}</CartItemText>
										<CartItemText>{cartItem.size}</CartItemText>
									</CartItemInfo>
								</CartItem>
							</TableItem>

							<TableItem type="data">
								<QtyBtn type="button">❮</QtyBtn>
								<CartItemText type="quantity">100</CartItemText>
								<QtyBtn type="button">❯</QtyBtn>
							</TableItem>

							<TableItem type="data">
								<CartItemText type="bold">$ 99.00</CartItemText>
							</TableItem>
						</TableRow>
					);
				})}
			</Table>

			{/* Cart Summary */}
			<CartSummary>
				<p>
					Total Amount:
					<span>$1,0000</span>
				</p>
				<button type="button">Checkout</button>
			</CartSummary>
		</>
	);
}

export default CartTable;
