/* Helper function to format category link to slug desired slug format */
export function formatCategoryLink(link: string): string {
	return link.split('/category/').pop() || '';
}
