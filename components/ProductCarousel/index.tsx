/* Styling */
import { CarauselWrapper, ImageChoiceList, ImageChoiceListItem, MainImage } from './index.style';

/* Components */
import GraphCMSImage from '../GraphCMSImage';

const images = [
	{
		url: 'https://media.graphcms.com/SFnYY4X6T2amyqAEUxiA'
	},
	{
		url: 'https://media.graphcms.com/wY0fjNbTyOSDRyfjBji8'
	},
	{
		url: 'https://media.graphcms.com/1htRShpXQyepUe3YyTl7'
	},
	{
		url: 'https://media.graphcms.com/JTFqp0CDQ6aSt44js5Wl'
	},
	{
		url: 'https://media.graphcms.com/AV0PuZu9RSxvYcKNaVlw'
	},
	{
		url: 'https://media.graphcms.com/mXOaP7XSkmByVDDOerEw'
	},
	{
		url: 'https://media.graphcms.com/x4K4reTaG2VPINSpvjIA'
	},
	{
		url: 'https://media.graphcms.com/QXTwtGnSiSsS69J5F6Ap'
	},
	{
		url: 'https://media.graphcms.com/nvnaFKbQHWbiVZm9ypVn'
	},
	{
		url: 'https://media.graphcms.com/yBBAixZ7SCkJ8exDxOvA'
	},
	{
		url: 'https://media.graphcms.com/rEmYSyjARmCK7yH4J8Ff'
	},
	{
		url: 'https://media.graphcms.com/7qWsre1TTKLvv5KHtaoK'
	},
	{
		url: 'https://media.graphcms.com/6RzF3CZeRmaJ3xRzNL5o'
	},
	{
		url: 'https://media.graphcms.com/mIDy3VXjQ7yjSnyuyw5l'
	}
];

function ProductCarousel() {
	return (
		<CarauselWrapper>
			{/* Catelog Image Selection List */}
			<ImageChoiceList>
				{images.map((image) => {
					return (
						<ImageChoiceListItem key={image.url}>
							<GraphCMSImage src={image.url} width={80} height={80} />
						</ImageChoiceListItem>
					);
				})}
			</ImageChoiceList>

			{/* Cover Image */}
			<MainImage>
				<GraphCMSImage src={images[0].url} width={600} height={600} />
			</MainImage>
		</CarauselWrapper>
	);
}

export default ProductCarousel;
