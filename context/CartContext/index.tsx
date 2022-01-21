import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/* Types */
import { AddItemToCart, CartItem } from '../../types/cart';

type CartContextType = {
	totalCartItems: number;
	totalCartPrice: number;
	cartItems: CartItem[];
	addItemToCart: (itemToAdd: AddItemToCart) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const useCart = () => useContext(CartContext);

export function CartProvider(props: React.PropsWithChildren<{}>) {
	const { children } = props;

	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	/* Total items count in cart */
	const totalCartItems = useMemo(() => {
		const total = cartItems.reduce((acc, item) => {
			return acc + (item.quantity || 0);
		}, 0);

		return total;
	}, [cartItems]);

	/* Total cart price */
	const totalCartPrice = useMemo(() => {
		const totalPrice = cartItems.reduce((acc, item) => {
			return acc + item.price * (item.quantity || 0);
		}, 0);

		return Math.round(totalPrice);
	}, [cartItems]);

	/* Add item to cart */
	const addItemToCart = useCallback(
		(itemToAdd: AddItemToCart) => {
			// check if the items exists in cart
			const doesItemExists = cartItems.find((item) => {
				return item.id === itemToAdd.id && item.size === itemToAdd.size && item.color === itemToAdd.color;
			});

			// if does not add the item to cart
			if (!doesItemExists) {
				setCartItems((prevCartItems) => {
					return [...prevCartItems, itemToAdd];
				});
			}
			// esle update the quantity to item that matches
			else {
				setCartItems((prevCartItems) => {
					const updatedCartItems = prevCartItems.map((item) => {
						if (item.id === itemToAdd.id && item.size === itemToAdd.size && item.color === itemToAdd.color) {
							return { ...item, quantity: (item.quantity || 0) + 1 };
						}

						return item;
					});

					return updatedCartItems;
				});
			}

			// finally update the local storage
			localStorage.setItem('moiteilStoreCart', JSON.stringify(cartItems));
		},

		[cartItems]
	);

	/* Clear the cart */
	const clearCart = useCallback(() => {
		setCartItems([]);
	}, []);

	useEffect(() => {
		// on mount if the cart is present in local storage and use it if yes
		const hasPreviousCartItem = JSON.parse(localStorage.getItem('moiteilStoreCart') || '[]');

		if (hasPreviousCartItem.length > 0) {
			setCartItems(hasPreviousCartItem);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('moiteilStoreCart', JSON.stringify(cartItems));
	}, [cartItems]);

	const value = useMemo(() => {
		return {
			totalCartItems,
			totalCartPrice,
			cartItems,
			addItemToCart,
			clearCart
		};
	}, [totalCartItems, totalCartPrice, addItemToCart, clearCart, cartItems]);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
