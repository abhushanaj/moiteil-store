import Image, { ImageProps } from 'next/image';

/* Utils */
import { generateBlurDataUrl, graphCMSImageLoader } from '../../utils/image';

type Props = ImageProps;

export function GraphCMSImage(props: Props) {
	return (
		<Image
			placeholder="blur"
			loader={graphCMSImageLoader}
			blurDataURL={generateBlurDataUrl({ width: 500, height: 500 })}
			{...props}
		/>
	);
}

export default GraphCMSImage;
