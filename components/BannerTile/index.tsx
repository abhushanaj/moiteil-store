import React from 'react';

/* Styling */
import { Tile } from './index.styles';

/* Types */
import type { StitchesCSS } from '../../stitches.config';

type Props = React.PropsWithChildren<{ style?: StitchesCSS }>;

function BannerTile(props: Props) {
	const { children, style } = props;
	return <Tile css={style}>{children}</Tile>;
}

export default BannerTile;

BannerTile.defaultProps = {
	style: {}
};
