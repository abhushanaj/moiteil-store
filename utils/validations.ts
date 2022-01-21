/* Helper function to test if it is a valid email address */
export function isValidEmail(email: string) {
	return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
}
