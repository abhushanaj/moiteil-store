import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useCallback, useMemo, useState } from 'react';

/* Styling */
import {
	descriptionLayout,
	detailsLayout,
	ProductVariantDetails,
	ProductVariantImages
} from '../../styles/productPage.styles';

/* Components */
import AppLayout from '../../components/Layout/AppLayout';
import ContentLayout from '../../components/Layout/ContentLayout';
import Breadcrumb from '../../components/Breadcrumb';
import ColorSwatchList from '../../components/ColorSwatchList';
import ProductSizeList from '../../components/ProductSizeList';
import ProductCarousel from '../../components/ProductCarousel';
import Button from '../../components/Button';

/* Lib */
import { getProductDetailsBySlug, getProducts } from '../../lib/GraphCMS/functions/products';

/* Utils */
import { parseMarkdownStringToHtml } from '../../utils/parser';

/* Consumers */
import { useCart } from '../../context/CartContext';

/* Types */
import type { ProductVariant, ProductWithVariants } from '../../types/products';
import type { AddItemToCart } from '../../types/cart';

type Props = {
	product: ProductWithVariants;
};

const ProductPage: NextPage<Props> = (props) => {
	const { product } = props;

	const { addItemToCart } = useCart();

	// consider variantion[0] as default selected variant
	const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.productVariants[0]);

	// consider the first size as the default size
	const [selectedSize, setSelectedSize] = useState<string>(product.productVariants[0].size[0]);

	// consider the default variants first catelog image as the default image
	const [selectedImage, setSelectedImage] = useState<string>(product.productVariants[0].catelogImages[0].url);

	/* Evaluate only once on mount */
	const possibleColorChoices = useMemo(() => {
		const colorChoices = product.productVariants.map((variant) => variant.color.hex);
		return colorChoices;
	}, [product.productVariants]);

	/* Re evaluate on change for selected variant */
	const possibleSizeChoices = useMemo(() => {
		const allSizes = selectedVariant.size.map((size) => size);
		return allSizes;
	}, [selectedVariant]);

	/* Re evaluate on change for selected variant */
	const possibleCatelogImages = useMemo(() => {
		const allImages = selectedVariant.catelogImages.map((image) => image.url);
		return allImages;
	}, [selectedVariant]);

	/* Select a new variant using color */
	const changeSelectedVariantByColor = useCallback(
		(color: string) => {
			const newSelectedVariant = product.productVariants.find((variant) => variant.color.hex === color);

			if (newSelectedVariant) {
				setSelectedImage(newSelectedVariant.catelogImages[0].url);
				setSelectedVariant(newSelectedVariant);
				setSelectedSize(newSelectedVariant.size[0]);
			}
		},
		[product.productVariants]
	);

	/* Select size for variant */
	const handleSizeChange = useCallback(
		(size: string) => {
			if (possibleSizeChoices.includes(size)) {
				setSelectedSize(size);
			}
		},
		[possibleSizeChoices]
	);

	/* Select the image */
	const handleImageChange = useCallback(
		(url: string) => {
			if (possibleCatelogImages.includes(url)) {
				setSelectedImage(url);
			}
		},
		[possibleCatelogImages]
	);

	/* Handle add item to cart */
	const handleAddItemToCart = useCallback(() => {
		const itemToAdd: AddItemToCart = {
			id: selectedVariant.id,
			name: product.name,
			image: selectedVariant.catelogImages[0],
			price: selectedVariant.price,
			size: selectedSize,
			color: selectedVariant.color
		};

		addItemToCart(itemToAdd);
	}, [addItemToCart, selectedVariant, selectedSize, product.name]);

	return (
		<AppLayout>
			<ContentLayout>
				<Breadcrumb
					style={{ my: '3rem' }}
					currentPath={[
						{ href: '/category', label: 'Store', isActive: false, isDisabled: false },
						{
							href: `/product/${product.slug}`,
							label: product.name,
							isActive: true,
							isDisabled: false
						}
					]}
				/>
			</ContentLayout>

			{/* Product Variants Details  */}
			<ContentLayout as="section" style={detailsLayout}>
				{/* Product Image Carousel */}
				<ProductVariantImages>
					<ProductCarousel
						productImages={possibleCatelogImages}
						activeImage={selectedImage}
						onImageClick={handleImageChange}
					/>
				</ProductVariantImages>

				{/* Product Details */}
				<ProductVariantDetails>
					<h1>{product.name}</h1>
					<h2>$ {selectedVariant.price}</h2>

					{/* Selection for product variant colors */}
					{possibleColorChoices.length > 1 && (
						<ColorSwatchList
							colorChoices={possibleColorChoices}
							selectedColor={selectedVariant.color.hex}
							onColorChange={changeSelectedVariantByColor}
						/>
					)}

					{/* Selection for sizes for product variant */}
					<ProductSizeList
						sizeChoices={possibleSizeChoices}
						selectedSize={selectedSize}
						onSizeChange={handleSizeChange}
					/>

					{/* Temporary add to cart button */}
					<Button type="button" onClick={handleAddItemToCart}>
						Add to cart
					</Button>
				</ProductVariantDetails>
			</ContentLayout>

			{/* Product Description */}
			<ContentLayout as="section" style={descriptionLayout}>
				<h2>Description</h2>
				{/* eslint-disable-next-line react/no-danger */}
				<div dangerouslySetInnerHTML={{ __html: product.description }} />
			</ContentLayout>
		</AppLayout>
	);
};

export default ProductPage;

/* Get possible list of products */
export const getStaticPaths: GetStaticPaths = async () => {
	try {
		// get first 100 products , rest can be generated using ISR
		const { products } = (await getProducts({ first: 100 })) ?? [];

		const paths = products.map((product) => {
			return {
				params: {
					productNameSlug: product.slug
				}
			};
		});

		return {
			paths,
			fallback: false
		};
	} catch (err) {
		console.error('Error fetching paths for the product');
		return {
			paths: [],
			fallback: false
		};
	}
};

// Get all details for the product based on slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		// get product details based on slug
		const { product } = await getProductDetailsBySlug(params?.productNameSlug as string);

		// if product not found retiurn  404 page
		if (!product) {
			return {
				notFound: true
			};
		}

		const { description } = product;

		return {
			props: {
				product: {
					...product,
					description: await parseMarkdownStringToHtml(description)
				}
			}
		};
	} catch (err) {
		console.error('Error fetching details for category', err);

		// any errors return 404 page
		return {
			notFound: true
		};
	}
};
