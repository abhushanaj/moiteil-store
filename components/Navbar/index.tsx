import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';

/* Styling */
import { BurgerBtn, NavbarItem, NavbarItemList, NavbarLayout, TopBarWrapper } from './index.styles';

/* Components */
import InternalLink from '../InternalLink';
import ContentLayout from '../Layout/ContentLayout';

/* Data */
import { NAV_ITEMS } from './data';

/* Assets */
import moiteilLogo from '../../public/moiteil-logo.png';
// import burgerMenu from '../../public/burger-menu.svg';
// import closeIcon from '../../public/close-icon.svg';

function Navbar() {
	const router = useRouter();

	const [activeUrl, setActiveUrl] = useState(router.asPath);

	useEffect(() => {
		router.events.on('routeChangeComplete', (url: string) => {
			setActiveUrl(url);
		});

		return () => {
			router.events.off('routeChangeComplete', (url: string) => {
				setActiveUrl(url);
			});
		};
	}, [router]);

	return (
		<NavbarLayout>
			<ContentLayout>
				{/* Top bar wrapper */}
				<TopBarWrapper>
					<InternalLink href="/">
						<Image src={moiteilLogo} />
					</InternalLink>

					<BurgerBtn>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M24 6H0V2H24V6ZM24 10H0V14H24V10ZM24 18H0V22H24V18Z" fill="#333237" />
						</svg>
					</BurgerBtn>
				</TopBarWrapper>

				{/* Navigation List */}
				<NavbarItemList>
					{NAV_ITEMS.map((item) => {
						return (
							<NavbarItem key={item.href} active={activeUrl === item.href}>
								<InternalLink href={item.href}>{item.label}</InternalLink>
							</NavbarItem>
						);
					})}
				</NavbarItemList>

				{/* Mobile Navbar */}
			</ContentLayout>
		</NavbarLayout>
	);
}

export default Navbar;
