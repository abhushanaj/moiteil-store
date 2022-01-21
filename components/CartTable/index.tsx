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
	QtyBtnWrapper,
	CartItemColor
} from './index.styles';

/* Components */
import GraphCMSImage from '../GraphCMSImage';
import EmptyCartMessage from '../EmptyCartMessage';

/* Consumer */
import { useCart } from '../../context/CartContext';

/* Utils */
import { formatSizeChoice } from '../../utils/product';

function CartTable() {
	const { totalCartPrice, cartItems, clearCart, removeItemFromCart, addItemToCart } = useCart();

	if (cartItems && cartItems.length === 0) {
		return <EmptyCartMessage />;
	}

	return (
		<>
			{/* Clear Cart Button */}
			<button type="button" onClick={clearCart}>
				Clear Cart
			</button>
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
				{cartItems.map((cartItem, index) => {
					return (
						<TableRow key={cartItem.id + cartItem.size + cartItem.color}>
							<TableItem type="data">{index + 1}</TableItem>

							<TableItem>
								<CartItem>
									<CartItemImage>
										<GraphCMSImage src={cartItem.image.url} width={100} height={100} />
									</CartItemImage>

									<CartItemInfo>
										<CartItemText type="name">{cartItem.name} </CartItemText>

										<CartItemText>{`$${cartItem.price} (x${cartItem.quantity})`} </CartItemText>

										<CartItemText>{formatSizeChoice(cartItem.size)}</CartItemText>

										<CartItemText>
											<CartItemColor css={{ bgColor: `${cartItem.color.hex}` }} title={cartItem.color.hex} />
										</CartItemText>

										<CartItemText type="bold">
											Sub Total: <span>{`$${Math.round(cartItem.price * (cartItem.quantity || 0))}`}</span>
										</CartItemText>
									</CartItemInfo>
								</CartItem>
							</TableItem>

							<TableItem>
								<QtyBtnWrapper>
									<QtyBtn
										type="button"
										onClick={() => {
											addItemToCart({
												id: cartItem.id,
												size: cartItem.size,
												color: cartItem.color,
												price: cartItem.price,
												image: cartItem.image,
												name: cartItem.name
											});
										}}
									>
										+
									</QtyBtn>

									<CartItemText type="quantity">{cartItem.quantity}</CartItemText>

									<QtyBtn
										type="button"
										onClick={() => {
											removeItemFromCart({
												id: cartItem.id,
												size: cartItem.size,
												color: cartItem.color
											});
										}}
									>
										-
									</QtyBtn>
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
					<span>{`$${totalCartPrice}`}</span>
				</p>
				<button type="button">Checkout</button>
			</CartSummary>
		</>
	);
}

export default CartTable;
