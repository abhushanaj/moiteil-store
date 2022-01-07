import React from 'react';

/* Styling */
import { CategoryBannerTile } from './index.styles';

type Props = React.PropsWithChildren<{}>;

function CategoryBanner(props: Props) {
	const { children } = props;
	return <CategoryBannerTile>{children}</CategoryBannerTile>;
}

export default CategoryBanner;
