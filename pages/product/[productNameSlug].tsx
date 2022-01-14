import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useMemo, useState } from 'react';

/* Styling */
import { detailsLayout, ProductVariantDetails, ProductVariantImages } from '../../styles/productPage.styles';

/* Components */
import AppLayout from '../../components/Layout/AppLayout';
import ContentLayout from '../../components/Layout/ContentLayout';
import Breadcrumb from '../../components/Breadcrumb';
import ColorSwatchList from '../../components/ColorSwatchList';
import ProductSizeList from '../../components/ProductSizeList';

/* Lib */
import { getProductDetailsBySlug, getProducts } from '../../lib/GraphCMS/functions/products';

/* Types */
import { ProductVariant, ProductWithVariants } from '../../types/products';

type Props = {
	product: ProductWithVariants;
};

const ProductPage: NextPage<Props> = (props) => {
	const { product } = props;

	// consider variantion[0] as default
	const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.productVariants[0]);

	/* Select a new variant using color */
	const changeSelectedVariantByColor = (color: string) => {
		const newSelectedVariant = product.productVariants.find((variant) => variant.color.hex === color);

		if (newSelectedVariant) {
			setSelectedVariant(newSelectedVariant);
		}
	};

	// evaluate only once on mount
	const possibleColorChoices = useMemo(() => {
		const colorChoices = product.productVariants.map((variant) => variant.color.hex);
		return colorChoices;
	}, []);

	// reevaluate on change for selected variant
	const possibleSizeChoices = useMemo(() => {
		const allSizes = selectedVariant.size.map((size) => size);
		return allSizes;
	}, [selectedVariant]);

	return (
		<AppLayout>
			<ContentLayout>
				<Breadcrumb
					style={{ my: '3rem' }}
					currentPath={[
						{ href: '/', label: 'Store', isActive: false, isDisabled: true },
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
				<ProductVariantImages />

				<ProductVariantDetails>
					<h1>{product.name}</h1>
					<h2>$ {selectedVariant.price}</h2>

					{/* Selection for product variant colors */}
					<ColorSwatchList
						colorChoices={possibleColorChoices}
						selectedColor={selectedVariant.color.hex}
						handleSwatchClick={changeSelectedVariantByColor}
					/>

					{/* Selection for sizes for product variant */}
					<ProductSizeList sizeChoices={possibleSizeChoices} />
				</ProductVariantDetails>
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

		return {
			props: {
				product
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
