import { graphCMSClient } from '..';

/* GQL Queries */
import { GET_CATEGORIES_LIST, GET_CATEGORY_DETAILS_BY_LINK } from '../../../graphQL/queries/categories';

/* Types */
import { Category, CategoryDetails } from '../../../types/Categories';

type CategoryPayload = {
	first: number;
};

/* Helper functiopn to get all contents for categories section */
export async function getCategoriesList(payload?: CategoryPayload): Promise<{ categoriesLists: Category[] }> {
	return graphCMSClient.request(GET_CATEGORIES_LIST, { first: payload?.first });
}

/* Helper function to details by categry link */
export async function getDetailsByCategoryLink(categoryLink: string): Promise<{ categoriesList: CategoryDetails }> {
	return graphCMSClient.request(GET_CATEGORY_DETAILS_BY_LINK, { categoryLink });
}
