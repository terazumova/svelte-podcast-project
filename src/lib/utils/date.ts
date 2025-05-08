export const formatDate = (dateInput: string | Date): string => {
	const date = new Date(dateInput);
	return date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
};
