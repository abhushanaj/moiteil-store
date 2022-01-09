import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

/* Components */
import AppLayout from '../../components/Layout/AppLayout';
import ContentLayout from '../../components/Layout/ContentLayout';
import Breadcrumb from '../../components/Breadcrumb';

/* Lib */
import { getProductDetailsBySlug, getProducts } from '../../lib/GraphCMS/functions/products';

/* Types */

import { ProductWithoutThumnbail } from '../../types/products';
import {
	detailsLayout,
	ProductVariantDetails,
	ProductVariantImages,
	Swatch,
	SwatchList
} from '../../styles/productPage.styles';

type Props = {
	product: ProductWithoutThumnbail;
};

const ProductPage: NextPage<Props> = (props) => {
	const { product } = props;

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
					<h2>$ 25.09</h2>

					<SwatchList>
						<Swatch style={{ background: '#0c0c0c' }} selected title="#0c0c0c" />
						<Swatch style={{ background: '#322622' }} title="#322622" />
						<Swatch style={{ background: '#3e3c3d' }} title="#3e3c3d" />
						<Swatch style={{ background: '#3e3c3d' }} title="#3e3c3d" />
						<Swatch style={{ background: '#52514f' }} title="#52514f" />
						<Swatch style={{ background: '#cececc' }} />
						<Swatch style={{ background: '#e5d9c9' }} />
					</SwatchList>
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
