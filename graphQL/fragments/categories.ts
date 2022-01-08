import { gql } from 'graphql-request';

export const CATEGORY_DETAILS_FRAGMENT = gql`
	fragment CategoryDetails on CategoriesList {
		id
		name
		categoryLink
	}
`;
