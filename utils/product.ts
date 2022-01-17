/* Helper function to format size choice in correct order */
export function formatSizeChoice(sizeChoice: string) {
	return sizeChoice.split('_').reverse().join('');
}
