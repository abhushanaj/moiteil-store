import { graphCMSClient } from '..';

/* GQL Queries */
import { GET_CATEGORIES_LIST } from '../../../graphQL/queries/categories';

/* Types */
import { Category } from '../../../types/Categories';

type CategoryPayload = {
	first: number;
};
/* Helper functiopn to get all contents for categories section */
export async function getCategoriesList(payload?: CategoryPayload): Promise<{ categoriesLists: Category[] }> {
	return graphCMSClient.request(GET_CATEGORIES_LIST, { first: payload?.first });
}
