import Image, { ImageProps } from 'next/image';

/* Utils */
import { generateBlurDataUrl, graphCMSImageLoader } from '../../utils/image';

type Props = ImageProps;

export function GraphCMSImage(props: Props) {
	const { width, height, ...otherProps } = props;
	return (
		<Image
			loader={graphCMSImageLoader}
			placeholder="blur"
			{...otherProps}
			blurDataURL={generateBlurDataUrl({ width: Number(width) ?? 0, height: Number(height) ?? 0 })}
			width={width}
			height={height}
		/>
	);
}

export default GraphCMSImage;
