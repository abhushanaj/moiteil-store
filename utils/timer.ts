/* Helper function to mimic sleep functionality using a promise */
export function sleep(time: number) {
	return new Promise((resolve, reject) => {
		if (time < 0) {
			reject(new Error('Time value must be greater than zero'));
		}

		setTimeout(() => {
			resolve(true);
		}, time);
	});
}
