import { graphCMSClient } from '..';

/* GQL Queries */
import { GET_CATEGORIES_LIST } from '../../../graphQL/queries/categories';

/* Types */
import { Category } from '../../../types/Categories';

/* Helper functiopn to get all contents for categories section */
export async function getCategoriesList(): Promise<{ categoriesLists: Category[] }> {
	return graphCMSClient.request(GET_CATEGORIES_LIST);
}
