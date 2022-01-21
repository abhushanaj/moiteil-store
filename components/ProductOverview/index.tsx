/* Styles */
import { ProductCardWrapper, ProductContent, ProductImage, viewProductStyles } from './index.styles';

/* Components */
import GraphCMSImage from '../GraphCMSImage';
import InternalLink from '../InternalLink';

/* Types */
import type { Image } from '../../types/image';

type Props = {
	name: string;
	slug: string;
	thumbnail: Image;
	startingPrice: number;
};

function ProductOverview(props: Props) {
	const { name, slug, thumbnail, startingPrice } = props;
	return (
		<ProductCardWrapper>
			<ProductImage>
				<GraphCMSImage width={260} height={260} src={thumbnail.url} />
			</ProductImage>

			<ProductContent>
				<h2>{name}</h2>
				<p>
					Starting from <strong>$ {startingPrice}</strong>
				</p>

				<InternalLink href={`/product/${slug}`} style={viewProductStyles}>
					View Product
				</InternalLink>
			</ProductContent>
		</ProductCardWrapper>
	);
}

export default ProductOverview;
