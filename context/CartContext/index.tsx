import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/* Types */
import type { AddItemToCart, CartItem, RemoveItemFromCart } from '../../types/cart';

type CartContextType = {
	totalCartItems: number;
	totalCartPrice: number;
	cartItems: CartItem[];
	clearCart: () => void;
	addItemToCart: (itemToAdd: AddItemToCart) => void;
	removeItemFromCart: (itemToRemove: RemoveItemFromCart) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const useCart = () => {
	const contextValue = useContext(CartContext);

	if (!contextValue.cartItems) {
		throw new Error('To use `useCart() hook, the component must have a parent CartProvider');
	} else {
		return contextValue;
	}
};

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
				return item.id === itemToAdd.id && item.size === itemToAdd.size && item.color.hex === itemToAdd.color.hex;
			});

			// if does not add the item to cart
			if (!doesItemExists) {
				setCartItems((prevCartItems) => {
					return [...prevCartItems, { ...itemToAdd, quantity: 1 }];
				});
			}
			// esle update the quantity to item that matches
			else {
				setCartItems((prevCartItems) => {
					const updatedCartItems = prevCartItems.map((item) => {
						if (item.id === itemToAdd.id && item.size === itemToAdd.size && item.color.hex === itemToAdd.color.hex) {
							return { ...item, quantity: (item.quantity || 0) + 1 };
						}

						return item;
					});

					return updatedCartItems;
				});
			}
		},

		[cartItems]
	);

	/* Remove Item from cart */
	const removeItemFromCart = useCallback(
		(itemToRemove: RemoveItemFromCart) => {
			// check if the items exists in cart
			const doesItemExists = cartItems.find((item) => {
				return (
					item.id === itemToRemove.id && item.size === itemToRemove.size && item.color.hex === itemToRemove.color.hex
				);
			});

			// run only if item exists in cart

			if (doesItemExists) {
				const currentQty = doesItemExists.quantity;

				// if qty=1 then simply remove the item
				if (currentQty === 1) {
					setCartItems((prevCartItems) => {
						return prevCartItems.filter((cartItem) => {
							const uniqueCheck =
								cartItem.id === itemToRemove.id &&
								cartItem.size === itemToRemove.size &&
								cartItem.color.hex === itemToRemove.color.hex;

							return !uniqueCheck;
						});
					});
				}
				// else reduce the quanity by 1
				setCartItems((prevCartItems) => {
					return prevCartItems.map((cartItem) => {
						const uniqueCheck =
							cartItem.id === itemToRemove.id &&
							cartItem.size === itemToRemove.size &&
							cartItem.color.hex === itemToRemove.color.hex;

						if (uniqueCheck) {
							return { ...cartItem, quantity: (cartItem.quantity || 0) - 1 };
						}
						return cartItem;
					});
				});
			}
		},

		[cartItems]
	);

	/* Clear the cart */
	const clearCart = useCallback(() => {
		setCartItems([]);
	}, []);

	// on mount, check if there is any items in the cart
	useEffect(() => {
		// on mount if the cart is present in local storage and use it if yes
		const hasPreviousCartItem = JSON.parse(localStorage.getItem('moiteilStoreCart') || '[]');

		if (hasPreviousCartItem.length > 0) {
			setCartItems(hasPreviousCartItem);
		}
	}, []);

	// on change for cartItems update the local storage
	useEffect(() => {
		localStorage.setItem('moiteilStoreCart', JSON.stringify(cartItems));
	}, [cartItems]);

	const value = useMemo(() => {
		return {
			totalCartItems,
			totalCartPrice,
			cartItems,
			addItemToCart,
			removeItemFromCart,
			clearCart
		};
	}, [totalCartItems, totalCartPrice, addItemToCart, clearCart, cartItems, removeItemFromCart]);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
