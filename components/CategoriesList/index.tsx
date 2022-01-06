/* Styles */
import { CategoriesListGrid } from './index.styles';

/* Components */
import ContentLayout from '../Layout/ContentLayout';
import InternalLink from '../InternalLink';
import CategoryCard from './CategoryCard';

/* Types */
import { Category } from '../../types/Categories';

type Props = {
	categoryLists: Category[];
};

function CategoriesList(props: Props) {
	const { categoryLists } = props;

	return (
		<ContentLayout style={{ my: '10rem' }}>
			{/*  filter first two categories */}
			<CategoriesListGrid grid="60-40">
				{categoryLists
					.filter((category, index) => {
						return index < 2;
					})
					.map((category, index) => {
						return (
							<InternalLink href={category.categoryLink} key={category.id}>
								<CategoryCard small={index % 2 !== 0} title={category.name} coverImage={category.categoryImage.url} />
							</InternalLink>
						);
					})}
			</CategoriesListGrid>

			<CategoriesListGrid grid="40-60" css={{ mt: '3.2rem' }}>
				{categoryLists
					.filter((category, index) => {
						return index >= 2;
					})
					.map((category, index) => {
						return (
							<InternalLink href={category.categoryLink} key={category.id}>
								<CategoryCard small={index % 2 === 0} title={category.name} coverImage={category.categoryImage.url} />
							</InternalLink>
						);
					})}
			</CategoriesListGrid>
		</ContentLayout>
	);
}

export default CategoriesList;
