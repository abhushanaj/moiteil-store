/* Styling */
import { CarauselWrapper, ImageChoiceList, ImageChoiceListItem, MainImage } from './index.style';

/* Components */
import GraphCMSImage from '../GraphCMSImage';

type Props = {
	productImages: string[];
	activeImage: string;
	onImageClick: (image: string) => void;
};

function ProductCarousel(props: Props) {
	const { activeImage, productImages, onImageClick } = props;

	return (
		<CarauselWrapper>
			{/* Catelog Image Selection List */}
			<ImageChoiceList>
				{productImages.map((image) => {
					return (
						<ImageChoiceListItem
							key={image}
							selected={activeImage === image}
							onClick={() => {
								onImageClick(image);
							}}
						>
							<GraphCMSImage src={image} width={80} height={80} />
						</ImageChoiceListItem>
					);
				})}
			</ImageChoiceList>

			{/* Cover Image */}
			{productImages.map((image) => {
				return (
					<MainImage active={activeImage === image} key={image}>
						<GraphCMSImage src={image} width={550} height={550} />
					</MainImage>
				);
			})}
		</CarauselWrapper>
	);
}

export default ProductCarousel;
