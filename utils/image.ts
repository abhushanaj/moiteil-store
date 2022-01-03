import type { ImageLoaderProps } from 'next/image';

/* Custom loader for the GraphCMS Images */
export function graphCMSImageLoader(loader: ImageLoaderProps) {
	const { src, width } = loader;

	const [domainProtocol, resourcePath] = src.split('media.graphcms.com/');

	const result = `${domainProtocol}media.graphcms.com/resize=width:${width}/${resourcePath}`;

	return result;
}

type ImageBlur = {
	width: number;
	height: number;
};
/* Gnerate shimmer for blue effect on images */
export function shimmer({ width, height }: ImageBlur) {
	return `
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="rgba(255,255,255,0.2)" />
  <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
</svg>`;
}

export function toBase64(str: string) {
	return typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
}

export function generateBlurDataUrl({ width, height }: ImageBlur) {
	const generatedShimmer = shimmer({ width, height });
	const base64Shimmer = toBase64(generatedShimmer);

	return `data:image/svg+xml;base64,${base64Shimmer}`;
}
