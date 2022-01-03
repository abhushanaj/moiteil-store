import Image, { ImageProps } from 'next/image';

/* Utils */
import { generateBlurDataUrl, graphCMSImageLoader } from '../../utils/image';

type Props = ImageProps;

export function GraphCMSImage(props: Props) {
	return (
		<Image
			{...props}
			placeholder="blur"
			loader={graphCMSImageLoader}
			blurDataURL={generateBlurDataUrl({ width: 500, height: 500 })}
		/>
	);
}

export default GraphCMSImage;
