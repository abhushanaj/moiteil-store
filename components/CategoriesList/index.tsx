/* Styles */
import { CategoriesListGrid } from './index.styles';

/* Components */
import ContentLayout from '../Layout/ContentLayout';
import InternalLink from '../InternalLink';
import CategoryCard from './CategoryCard';

function CategoriesList() {
	return (
		<ContentLayout style={{ my: '5rem' }}>
			<CategoriesListGrid grid="60-40">
				<InternalLink href="/category/clothing">
					<CategoryCard small={false} title="Clothing" coverImage="https://media.graphcms.com/WrapPzxAS8mqVKMdZSiS" />
				</InternalLink>

				<InternalLink href="/category/wall-art">
					<CategoryCard small title="Wall Art" coverImage="https://media.graphcms.com/GxdmPLgTLepODqlEI9eg" />
				</InternalLink>
			</CategoriesListGrid>

			<CategoriesListGrid grid="40-60" css={{ mt: '3.2rem' }}>
				<InternalLink href="/category/gifts">
					<CategoryCard small title="Gifts" coverImage="https://media.graphcms.com/Crf3fDUURUCK7tVISKXn" />
				</InternalLink>

				<InternalLink href="/category/home-and-living">
					<CategoryCard
						small={false}
						title="Home & Living"
						coverImage="https://media.graphcms.com/jawf590jSuy0r59wwNsf"
					/>
				</InternalLink>
			</CategoriesListGrid>
		</ContentLayout>
	);
}

export default CategoriesList;
