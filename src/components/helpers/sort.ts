export const sorterByKeyString = (a: any, b: any, key: string): 0 | -1 | 1 => {
	if (a[key] < b[key]) return -1;
	if (a[key] > b[key]) return 1;
	return 0;
};

export const sorterByKeyNumber = (a: any, b: any, key: string): number => {
	return a[key] - b[key];
};
