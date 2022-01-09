import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';

/* Styling */
import { BurgerBtn, MobileNavbar, NavbarItem, NavbarItemList, NavbarLayout, TopBarWrapper } from './index.styles';

/* Components */
import InternalLink from '../InternalLink';
import ContentLayout from '../Layout/ContentLayout';

/* Data */
import { NAV_ITEMS } from './data';

/* Assets */
import moiteilLogo from '../../public/moiteil-logo.png';

function Navbar() {
	const router = useRouter();

	const [activeUrl, setActiveUrl] = useState(router.asPath);
	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	const handleRouteChange = (url: string) => {
		setActiveUrl(url);

		// close the mobile navbar oly if it's open
		if (isMobileNavActive) {
			setIsMobileNavActive(false);
		}
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
			<NavbarLayout>
				<ContentLayout>
					{/* Top bar wrapper */}
					<TopBarWrapper>
						<InternalLink href="/">
							<Image src={moiteilLogo} />
						</InternalLink>

						<BurgerBtn onClick={handleToggleMobileNav}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M24 6H0V2H24V6ZM24 10H0V14H24V10ZM24 18H0V22H24V18Z" fill="#333237" />
							</svg>
						</BurgerBtn>
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
			</NavbarLayout>

			{/* Small screen navigation */}
			{isMobileNavActive && (
				<MobileNavbar animationType={isMobileNavActive ? 'slideIn' : 'slideOut'}>
					<NavbarItemList type="mobile">
						{NAV_ITEMS.map((item) => {
							return (
								<NavbarItem key={item.href} active={activeUrl === item.href}>
									<InternalLink href={item.href}>{item.label}</InternalLink>
								</NavbarItem>
							);
						})}
					</NavbarItemList>
				</MobileNavbar>
			)}
		</>
	);
}

export default Navbar;
