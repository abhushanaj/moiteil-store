/* Styles */
import { ProductCardWrapper, ProductContent, ProductImage, viewProductStyles } from './index.styles';

/* Components */
import GraphCMSImage from '../GraphCMSImage';
import InternalLink from '../InternalLink';

/* Types */
import type { Image } from '../../types/Image';

type Props = {
	name: string;
	slug: string;
	thumbnail: Image;
};

function ProductOverview(props: Props) {
	const { name, slug, thumbnail } = props;
	return (
		<ProductCardWrapper>
			<ProductImage>
				<GraphCMSImage width={260} height={260} src={thumbnail.url} />
			</ProductImage>

			<ProductContent>
				<h2>{name}</h2>
				<p>
					<strong>$ 18.00</strong>
				</p>

				<InternalLink href={`/product/${slug}`} style={viewProductStyles}>
					View Product
				</InternalLink>
			</ProductContent>
		</ProductCardWrapper>
	);
}

export default ProductOverview;
