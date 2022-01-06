/* Styling */
import { CategoryCardTitle, CatgeoryCard } from './index.styles';

/* Components */
import GraphCMSImage from '../../GraphCMSImage';

/* Types */
import type { StitchesGenericVariantsProps } from '../../../stitches.config';

type TitleVariants = StitchesGenericVariantsProps<typeof CategoryCardTitle>;

type Props = {
	title: string;
	coverImage: string;
} & TitleVariants;

function CategoryCard(props: Props) {
	const { small, title, coverImage } = props;

	return (
		<CatgeoryCard>
			<CategoryCardTitle small={small}>
				{title} <span />
			</CategoryCardTitle>

			<GraphCMSImage src={coverImage} alt="Clothing" width={350} height={350} />
		</CatgeoryCard>
	);
}

export default CategoryCard;
