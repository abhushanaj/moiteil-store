import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';

/* Styling */
import {
	BurgerBtn,
	ButtonWrapper,
	cartButtonLink,
	CartItemsCount,
	CloseBtn,
	DesktopNavbarLayout,
	MobileNavbarLayout,
	NavbarItem,
	NavbarItemList,
	TopBarWrapper
} from './index.styles';

/* Components */
import InternalLink from '../InternalLink';
import ContentLayout from '../Layout/ContentLayout';

/* Data */
import { NAV_ITEMS } from './data';

/* Consumers */
import { useCart } from '../../context/CartContext';

/* Assets */
import moiteilLogo from '../../public/moiteil-logo.png';
import cartIcon from '../../public/cart-icon.svg';

function Navbar() {
	const router = useRouter();

	const { totalCartItems } = useCart();

	const [activeUrl, setActiveUrl] = useState(router.asPath);
	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	const handleRouteChange = (url: string) => {
		setActiveUrl(url);

		// close the mobile navbar oly if it's open
		setIsMobileNavActive(false);
	};

	const handleToggleMobileNav = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsMobileNavActive((prevState) => {
			return !prevState;
		});
	};

	// Listen to router change events and close mobile nav on successful route change
	useEffect(() => {
		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router]);

	return (
		<>
			{/* Big screen navigation */}
			<DesktopNavbarLayout>
				<ContentLayout>
					{/* Top bar wrapper */}
					<TopBarWrapper>
						<InternalLink href="/">
							<Image src={moiteilLogo} />
						</InternalLink>

						<ButtonWrapper>
							<InternalLink href="/cart" style={cartButtonLink}>
								<Image src={cartIcon} />
								<CartItemsCount>{totalCartItems}</CartItemsCount>
							</InternalLink>
							<BurgerBtn onClick={handleToggleMobileNav}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path d="M24 6H0V2H24V6ZM24 10H0V14H24V10ZM24 18H0V22H24V18Z" fill="#333237" />
								</svg>
							</BurgerBtn>
						</ButtonWrapper>
					</TopBarWrapper>

					{/* Navigation List */}
					<NavbarItemList type="desktop">
						{NAV_ITEMS.map((item) => {
							return (
								<NavbarItem key={item.href} active={activeUrl === item.href}>
									<InternalLink href={item.href}>{item.label}</InternalLink>
								</NavbarItem>
							);
						})}
					</NavbarItemList>
				</ContentLayout>
			</DesktopNavbarLayout>

			{/* Small screen navigation */}
			{isMobileNavActive && (
				<MobileNavbarLayout animationType={isMobileNavActive ? 'slideIn' : 'slideOut'}>
					{/* Close button */}
					<CloseBtn onClick={handleToggleMobileNav}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_34_13)">
								<path
									d="M24 20.188L15.685 11.979L23.885 3.697L20.188 0L11.976 8.318L3.666 0.115L0 3.781L8.321 12.021L0.115 20.334L3.781 24L12.018 15.682L20.303 23.885L24 20.188Z"
									fill="#333237"
								/>
							</g>
							<defs>
								<clipPath id="clip0_34_13">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</CloseBtn>

					{/*  Mobile Navigation List */}
					<NavbarItemList type="mobile">
						{NAV_ITEMS.map((item) => {
							return (
								<NavbarItem key={item.href} active={activeUrl === item.href}>
									<InternalLink href={item.href}>{item.label}</InternalLink>
								</NavbarItem>
							);
						})}
					</NavbarItemList>
				</MobileNavbarLayout>
			)}
		</>
	);
}

export default Navbar;
